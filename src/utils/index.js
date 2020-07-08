import SituacaoBeneficiarioState from "../states/situacaoBeneficiario.state";


export const opcoesSituacaoBeneficiario = () => {
    return [
        {
            id: '',
            label: '-- Selecione --',
        },
        {
            id: SituacaoBeneficiarioState.ativo,
            label: 'Ativo',
        },
        {
            id: SituacaoBeneficiarioState.inativoPensionista,
            label: 'Inativo / Pensionista'
        },
    ];
};

export const moeda = (valor) => {
	if (valor <= 0) return '-';
	
	return `R$ ${(valor).toLocaleString('pt-BR', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	})}`
};

export const porcentagem = (valor) => {
	return `${(valor * 100).toLocaleString('pt-BR', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	})}%`
};
