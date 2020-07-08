import React, { useState, useEffect, useCallback } from 'react';

import HomePage from '../pages/home.page';
import TipoSimuladorState from '../states/tipoSimulador.state';
import InformacoesState from '../states/informacoes.state';
import SituacaoBeneficiarioState from '../states/situacaoBeneficiario.state';
import FaixaPropostaState from '../states/faixaProposta.state';


const HomeController = () => {
    const [tipoDeSimulacao, setTipoDeSimulacao] = useState(TipoSimuladorState.porContribuicao);
    const [situacaoBeneficiario, setSituacaoBeneficiario] = useState('');
    const [faixaDeContribuicao, setFaixaDeContribuicao] = useState('');
    const [aliquotaAbaixoDe14, setAliquotaAbaixoDe14] = useState('');
    const [remuneracaoTributavel, setRemuneracaoTributavel] = useState(0);
    const [contribuicaoProposta, setContribuicaoProposta] = useState(0);
    const [aliquotaProposta, setAliquotaProposta] = useState(0);
    const [valorBase, setValorBase] = useState(0);
    const [informacoes, setInformacoes] = useState({});

    const TETO_INSS = 6101.07;
    const SALARIO_MINIMO = 1045;

    const prepararValorBase = (valor) => {
        let novoValor = parseFloat(valor);

        setValorBase(novoValor);
    };

    const simuPorContri = () => {
        setTipoDeSimulacao(TipoSimuladorState.porContribuicao);
        setSituacaoBeneficiario('');
        setValorBase(0);
    };

    const simuPorRemu = () => {
        setTipoDeSimulacao(TipoSimuladorState.porRemuneracao);
        setSituacaoBeneficiario('');
        setValorBase(0);
    };

    const somatorioContribuicao_J6_J7 = useCallback(() => {
        let somatorio = 0;

        FaixaPropostaState[situacaoBeneficiario].map((faixa, indice, faixas) => {
            let resultado1 = 0;
            let resultadoFinal = 0;
            let primeiraFaixa = indice === 0;
            let faixaAnterior = faixas[indice - 1];

            if (
                remuneracaoTributavel > faixa.fim &&
                remuneracaoTributavel > 0
            ) {
                if (primeiraFaixa) {
                    resultado1 = faixa.fim;
                } else {
                    resultado1 = (faixa.fim - faixaAnterior.fim);
                }
            } else if (
                remuneracaoTributavel >= faixa.inicio &&
                remuneracaoTributavel <= faixa.fim &&
                remuneracaoTributavel > 0
            ) {
                if (primeiraFaixa) {
                    resultado1 = remuneracaoTributavel;
                } else {
                    resultado1 = (remuneracaoTributavel - faixaAnterior.fim)
                }
            }

            if (resultado1 >= 0) {
                if (primeiraFaixa) {
                    if (
                        situacaoBeneficiario === SituacaoBeneficiarioState.inativoPensionista &&
                        resultado1 > SALARIO_MINIMO
                    ) {
                        resultadoFinal = (resultado1 - SALARIO_MINIMO);
                    } else if (situacaoBeneficiario === SituacaoBeneficiarioState.ativo) {
                        resultadoFinal = resultado1;
                    } else {
                        resultadoFinal = 0;
                    }
                } else {
                    resultadoFinal = resultado1;
                }
            }

            resultadoFinal = (resultadoFinal * faixa.porcentagem);

            somatorio += resultadoFinal;

            return undefined;
        });

        return somatorio;
    }, [remuneracaoTributavel, situacaoBeneficiario]);

    const calcularAliquotaEfetiva_L2_L3 = useCallback(() => {
        let somatorioContribuicao = somatorioContribuicao_J6_J7();

        return (somatorioContribuicao / remuneracaoTributavel);
    }, [somatorioContribuicao_J6_J7, remuneracaoTributavel]);

    const gerarFaixaDeContribuicao = useCallback(() => {
        let novaFaixaDeContribuicao = '';

        if (
            situacaoBeneficiario !== '' &&
            remuneracaoTributavel > 0
        ) {
            if (situacaoBeneficiario === SituacaoBeneficiarioState.ativo) {
                if (remuneracaoTributavel <= 2000) {
                    novaFaixaDeContribuicao = informacoes.ate2000;
                } else if (remuneracaoTributavel <= 6000) {
                    novaFaixaDeContribuicao = informacoes.ate6000;
                } else if (remuneracaoTributavel <= 16000) {
                    novaFaixaDeContribuicao = informacoes.ate16000;
                } else {
                    novaFaixaDeContribuicao = informacoes.ate16000negacao;
                }
            } else if (situacaoBeneficiario === SituacaoBeneficiarioState.inativoPensionista) {
                if (remuneracaoTributavel <= 2000) {
                    novaFaixaDeContribuicao = informacoes.ate2000segundo;
                } else if (remuneracaoTributavel <= 6000) {
                    novaFaixaDeContribuicao = informacoes.ate6000segundo;
                } else if (remuneracaoTributavel <= 16000) {
                    novaFaixaDeContribuicao = informacoes.ate16000segundo;
                } else {
                    novaFaixaDeContribuicao = informacoes.ate16000segundoNegacao;
                }
            }
        }

        setFaixaDeContribuicao(novaFaixaDeContribuicao);
    }, [situacaoBeneficiario, remuneracaoTributavel, informacoes]);

    const gerarRemuneracaoTributavel = useCallback(() => {
        let novaRemuneracaoTributavel = 0;

        switch (tipoDeSimulacao) {
            case TipoSimuladorState.porContribuicao:
                if (situacaoBeneficiario !== '') {
                    if (situacaoBeneficiario === SituacaoBeneficiarioState.ativo) {
                        novaRemuneracaoTributavel = ((valorBase * 100) / 11);
                    } else {
                        novaRemuneracaoTributavel = ((((valorBase * 100) / 11)) + TETO_INSS);
                    }
                }
                break;
            case TipoSimuladorState.porRemuneracao:
                if (situacaoBeneficiario !== '') {
                    novaRemuneracaoTributavel = valorBase;
                }
                break;
            default:
                console.log(tipoDeSimulacao);
                break;
        }

        setRemuneracaoTributavel(novaRemuneracaoTributavel);
    }, [situacaoBeneficiario, valorBase, tipoDeSimulacao]);

    const gerarAliquotaAbaixoDe14 = useCallback(() => {
        let novaAliquotaAbaixoDe14 = '';

        if (
            situacaoBeneficiario === SituacaoBeneficiarioState.ativo &&
            aliquotaProposta < 0.14
        ) {
            novaAliquotaAbaixoDe14 = informacoes.aliquotaAbaixoDe14;
        }

        setAliquotaAbaixoDe14(novaAliquotaAbaixoDe14);
    }, [situacaoBeneficiario, aliquotaProposta, informacoes]);

    const gerarContribuicaoProposta = useCallback(() => {
        let novaContribuicaoProposta = 0;

        if (situacaoBeneficiario !== '') {
            novaContribuicaoProposta = somatorioContribuicao_J6_J7();
        }

        setContribuicaoProposta(novaContribuicaoProposta);
    }, [situacaoBeneficiario, somatorioContribuicao_J6_J7]);

    const gerarAliquotaProposta = useCallback(() => {
        let novaAliquotaProposta = 0;

        if (situacaoBeneficiario !== '') {
            novaAliquotaProposta = calcularAliquotaEfetiva_L2_L3();
        }

        setAliquotaProposta(novaAliquotaProposta);
    }, [situacaoBeneficiario, calcularAliquotaEfetiva_L2_L3]);

    useEffect(() => {
        if (process.env.NODE_ENV !== 'production') {
            console.log('informacoes', informacoes);
            console.log('valorBase', valorBase);
            console.log('tipoDeSimulacao', tipoDeSimulacao);
            console.log('situacaoBeneficiario', situacaoBeneficiario);
            console.log('faixaDeContribuicao', faixaDeContribuicao);
            console.log('remuneracaoTributavel', remuneracaoTributavel);
            console.log('aliquotaAbaixoDe14', aliquotaAbaixoDe14);
        }
    });

    useEffect(() => {
        setInformacoes(InformacoesState[tipoDeSimulacao]);
    }, [tipoDeSimulacao]);

    useEffect(() => {
        gerarFaixaDeContribuicao();
    }, [situacaoBeneficiario, gerarFaixaDeContribuicao]);

    useEffect(() => {
        gerarRemuneracaoTributavel();
        gerarAliquotaAbaixoDe14();
        gerarContribuicaoProposta();
        gerarAliquotaProposta();
    }, [
        valorBase, 
        situacaoBeneficiario, 
        gerarRemuneracaoTributavel, 
        gerarAliquotaAbaixoDe14,
        gerarContribuicaoProposta,
        gerarAliquotaProposta
    ]);

    const handlers = {
        setSituacaoBeneficiario,
        prepararValorBase,
        simuPorContri,
        simuPorRemu
    };

    const data = {
        remuneracaoTributavel,
        situacaoBeneficiario,
        contribuicaoProposta,
        faixaDeContribuicao,
        aliquotaAbaixoDe14,
        aliquotaProposta,
        tipoDeSimulacao,
        informacoes,
        valorBase
    };

    return <HomePage handlers={handlers} data={data} />
};

export default HomeController;
