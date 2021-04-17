import React, {FunctionComponent, useEffect} from 'react';
import Router from 'next/router';


const Index: FunctionComponent<any> = () => {
    useEffect(() => {
        Router.push('/posts');
    });

    return <div />;
};

export default Index;
