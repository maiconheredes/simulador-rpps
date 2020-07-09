import styled from 'styled-components';
import { Button, Row } from 'react-bootstrap';


export const HeaderButton = styled(Button)`
    display: block;
    margin: 15px 0;
    width: 100%;
`;

export const SpanMiddle = styled.span`
    padding: 15px 0;

    @media (min-width: 992px) {
        transform: translate(-50%, -50%);
        position: absolute;
        width: calc(100% - 30px);
        left: 50%;
        top: 50%;
    }
`;

export const LineRow = styled(Row)`
    border: 2px solid #007bff;
    padding: 15px 0;
    margin: 15px 0;
`;

export const HeaderBlue = styled.header`
    background-color: lightskyblue;
`;
