import React, { FunctionComponent } from 'react';
import Header from '../../components/Header';
import styled from 'styled-components';
import PostList from '../../containers/PostList';

const Wrapper = styled.div`
    margin-top: 50px;
    margin-left: 500px;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 500px;
    border: solid 1px;
`;


const Posts: FunctionComponent = () => {
    return (
        <Wrapper>
            <Header />
            <h3>Posts about what I learned, studied, etc.</h3>
            <PostList />
        </Wrapper>
    );
};

export default Posts;
