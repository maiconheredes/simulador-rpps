import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export const MainFooter = () => {
    return <footer>
        <Container>
            <Row>
                <Col>
                    <p>
                        <strong>
                            ¹ Caso seja contribuinte do Imposto de Renda Pessoa Física - IRPF, todo o 
                            valor da contribuição previdenciária será deduzido do IRPF.
                        </strong>
                    </p>
                    <p>² Por se tratar de uma simulação, os valores calculados são aproximados.</p>
                </Col>
            </Row>
        </Container>
    </footer>
};
