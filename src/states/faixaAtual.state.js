import SituacaoBeneficiarioState from "./situacaoBeneficiario.state";


const FaixaAtualState = {
    [SituacaoBeneficiarioState.ativo]: [
        {
            inicio: 0,
            fim: 2000,
            porcentagem: 0.11,
            deducao: 0
        },
        {
            inicio: 2000.01,
            fim: 6000,
            porcentagem: 0.11,
            deducao: 0
        },
        {
            inicio: 6000.01,
            fim: 16000,
            porcentagem: 0.11,
            deducao: 0
        },
        {
            inicio: 16000.01,
            fim: 500000,
            porcentagem: 0.11,
            deducao: 0
        },
    ],
    [SituacaoBeneficiarioState.inativoPensionista]: [
        {
            inicio: 0,
            fim: 2000,
            porcentagem: 0,
            deducao: 0
        },
        {
            inicio: 2000.01,
            fim: 6000,
            porcentagem: 0,
            deducao: 0
        },
        {
            inicio: 6000.01,
            fim: 16000,
            porcentagem: 0.11,
            deducao: 671.12
        },
        {
            inicio: 16000.01,
            fim: 500000,
            porcentagem: 0.11,
            deducao: 671.12
        },
    ]
};

export default FaixaAtualState;
