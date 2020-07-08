import React from 'react';
import { Container, Col, FormControl, Row } from 'react-bootstrap';

import { 
    LineRow, SpanMiddle
} from '../../styles/styles';
import { 
    opcoesSituacaoBeneficiario, moeda, porcentagem
} from '../../utils';


export const MainContribuicao = ({ handlers, data }) => {
    return <main>
        <Container>
            <LineRow>
                <Col lg={6}>
                    <SpanMiddle>{data.informacoes.textoValor}</SpanMiddle>
                </Col>
                <Col>
                    <FormControl 
                        onChange={(event) => handlers.setValorBase(parseFloat(event.target.value))}
                        value={data.valorBase}
                        type={'number'} 
                        min={0}
                    />
                </Col>
            </LineRow>
            <LineRow>
                <Col lg={6}>
                    <SpanMiddle>{'2 - Situação do beneficiário:'}</SpanMiddle>
                </Col>
                <Col>
                    <FormControl 
                        onChange={(event) => handlers.setSituacaoBeneficiario(event.target.value)}
                        value={data.situacaoBeneficiario}
                        as={'select'}
                    >
                        {opcoesSituacaoBeneficiario().map(item => <option key={item.id} value={item.id}>
                            {item.label}
                        </option>)}
                    </FormControl>
                </Col>
            </LineRow>
            <LineRow>
                <Col lg={6}>
                    <SpanMiddle>{'3 - Faixa de contribuição:'}</SpanMiddle>
                </Col>
                <Col>
                    <p>{data.faixaDeContribuicao}</p>
                </Col>
            </LineRow>
            <LineRow>
                <Col>
                    <Row>
                        <Col lg={12}>
                            <p>{'4 - Valor da contribuição:'}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <Row>
                                <Col>
                                    <SpanMiddle>{'Remuneração tributável'}</SpanMiddle>
                                </Col>
                                <Col>
                                    <FormControl
                                        value={moeda(data.remuneracaoTributavel)}
                                        type={'text'}
                                        readOnly
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <SpanMiddle>{'Contribuição proposta:'}</SpanMiddle>
                                </Col>
                                <Col>
                                    <FormControl
                                        value={moeda(data.contribuicaoProposta)}
                                        type={'text'}
                                        readOnly
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <SpanMiddle>{'Alíquota efetiva proposta:'}</SpanMiddle>
                                </Col>
                                <Col>
                                    <FormControl
                                        value={porcentagem(data.aliquotaProposta)}
                                        type={'text'}
                                        readOnly
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>
                                <strong>
                                    {'Valor da contribuição = (remuneração tributável * alíquota proposta) – dedução da faixa'}
                                </strong>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p><strong>{data.aliquotaAbaixoDe14}</strong></p>
                        </Col>
                    </Row>
                </Col>
            </LineRow>
        </Container>
    </main>
};