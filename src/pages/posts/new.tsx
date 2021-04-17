import { NextPage } from 'next';
import React from 'react';
import { PageWrapper } from '.';
import Header from '../../components/Header';
import NewPost from '../../containers/PostNew';

const NewPostPage: NextPage = () => {
    return (
        <PageWrapper>
            <Header />
            <NewPost />
        </PageWrapper>
    );
};

export default NewPostPage;
