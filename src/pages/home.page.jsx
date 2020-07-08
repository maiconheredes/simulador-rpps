import React from 'react';

import {
    MainHeader,
    MainContribuicao,
    MainFooter
} from '../components';


const HomePage = ({ handlers, data }) => {
    return <>
        <MainHeader handlers={handlers} data={data} />
        <MainContribuicao handlers={handlers} data={data} />
        <MainFooter />
    </>
};

export default HomePage;
