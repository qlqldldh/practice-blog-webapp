import React, { FunctionComponent } from 'react';
import Header from '../../components/Header';
import styled from 'styled-components';
import PostList from '../../containers/PostList';

export const PageWrapper = styled.div`
    margin-top: 50px;
    margin-left: 500px;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 500px;
`;


const PostListPage: FunctionComponent = () => {
    return (
        <PageWrapper>
            <Header />
            <PostList />
        </PageWrapper>
    );
};

export default PostListPage;
