import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import {
    HeaderButton, SpanMiddle
} from '../../styles/styles';


export const MainHeader = ({ handlers, data }) => {
    return <header>
        <Container>
            <Row>
                <Col lg={4}>
                    <HeaderButton onClick={() => handlers.simuPorContri()}>
                        {'SIMULAÇÃO POR CONTRIBUIÇÃO ATUAL'}
                    </HeaderButton>
                    <HeaderButton onClick={() => handlers.simuPorRemu()}>
                        {'SIMULAÇÃO POR REMUNERAÇÃO'}
                    </HeaderButton>
                </Col>
                <Col>
                    <SpanMiddle>{data.informacoes.textoHeader}</SpanMiddle>
                </Col>
            </Row>
        </Container>
    </header>
};
