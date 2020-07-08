import React from 'react';
import CurrencyInput from 'react-currency-input';
import { InputGroup } from 'react-bootstrap';


export const InputDinheiro = ({ ...props }) => {
    return <InputGroup>
        <InputGroup.Prepend>
            <InputGroup.Text>{'R$'}</InputGroup.Text>
        </InputGroup.Prepend>
        <CurrencyInput
            {...props}
            className={'form-control'}
            decimalSeparator={','}
            thousandSeparator={'.'}
        />
    </InputGroup>
};
