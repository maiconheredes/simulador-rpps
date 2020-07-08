import SituacaoBeneficiarioState from "./situacaoBeneficiario.state";


const FaixaPropostaState = {
    [SituacaoBeneficiarioState.ativo]: [
        {
            inicio: 0,
            fim: 2000,
            porcentagem: 0.13,
            deducao: 0
        },
        {
            inicio: 2000.01,
            fim: 6000,
            porcentagem: 0.14,
            deducao: 20
        },
        {
            inicio: 6000.01,
            fim: 16000,
            porcentagem: 0.16,
            deducao: 140
        },
        {
            inicio: 16000.01,
            fim: 500000,
            porcentagem: 0.19,
            deducao: 620
        },
    ],
    [SituacaoBeneficiarioState.inativoPensionista]: [
        {
            inicio: 0,
            fim: 2000,
            porcentagem: 0.13,
            deducao: 135.85
        },
        {
            inicio: 2000.01,
            fim: 6000,
            porcentagem: 0.14,
            deducao: 155.85
        },
        {
            inicio: 6000.01,
            fim: 16000,
            porcentagem: 0.16,
            deducao: 275.85
        },
        {
            inicio: 16000.01,
            fim: 500000,
            porcentagem: 0.19,
            deducao: 755.85
        },
    ]
};

export default FaixaPropostaState;
