import { GetServerSideProps } from 'next';
import React, { FunctionComponent } from 'react';
import { PageWrapper } from '.';
import Header from '../../components/Header';
import PostDetail from '../../containers/PostDetail';
import { postType } from '../../types/post';
import { getItem } from '../../utils/axiosUtils';

type initProp = {
    post: postType;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { id } = query;
    const { data: postData, status } = await getItem(`/posts/${id}`);

    if (status != 200) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            post: postData
        }
    };
};

const PostDetailPage: FunctionComponent<initProp> = ({post}) => {
    return (
        <PageWrapper>
            <Header />
            <PostDetail post={post} />
        </PageWrapper>
    );
}

export default PostDetailPage;
