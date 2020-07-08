import TipoSimuladorState from "./tipoSimulador.state";


const InformacoesGeraisState = {
    ate2000: `1ª Faixa - até R$ 2.000,00 - alíquota até 13,00%.`,
    ate6000: `2ª Faixa - até R$ 6.000,00 - alíquota até 14,00% - dedução de R$ 20,00.`,
    ate16000: `3ª Faixa - até R$ 16.000,00 - alíquota até 16,00% - dedução de R$ 140,00.`,
    ate16000negacao: `4ª Faixa - acima de R$ 16.000,00 - alíquota até 19,00% - dedução de R$ 620,00.`,
    ate2000segundo: `1ª Faixa - até R$ 2.000,00 - alíquota até 13,00% - dedução de R$ 135,85.`,
    ate6000segundo: `2ª Faixa - até R$ 6.000,00 - alíquota até 14,00% - dedução de R$ 155,85.`,
    ate16000segundo: `3ª Faixa - até R$ 16.000,00 - alíquota até 16,00% - dedução de R$ 275,85.`,
    ate16000segundoNegacao: `4ª Faixa - acima de R$ 16.000,00 - alíquota até 19,00% - dedução de R$ 755,85.`,
    aliquotaAbaixoDe14: `Servidor, você está entre os 83,3% dos servidores ativos do Estado que terão 
    alíquota efetiva abaixo de 14%, número recomendado pelo Governo Federal.`,
};

const InformacoesState = {
    [TipoSimuladorState.porContribuicao]: {
        ...InformacoesGeraisState,
        textoHeader: `REFORMA DA PREVIDÊNCIA DE MINAS GERAIS - PLC 46/2020 
        SIMULAÇÃO DE ALÍQUOTA EFETIVA COM BASE NA CONTRIBUIÇÃO ATUAL`,
        textoValor: `1 - Valor da contribuição atual:`,
    },
    [TipoSimuladorState.porRemuneracao]: {
        ...InformacoesGeraisState,
        textoHeader: `REFORMA DA PREVIDÊNCIA DE MINAS GERAIS - PLC 46/2020 
        SIMULAÇÃO DE ALÍQUOTA EFETIVA COM BASE NA REMUNERAÇÃO DE CONTRIBUIÇÃO`,
        textoValor: `1 - Valor da remuneração de contribuição:`,
    }
};

export default InformacoesState;
