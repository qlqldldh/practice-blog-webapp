import React, { FunctionComponent, useEffect, useState } from 'react';
import { postType } from '../../types/post';
import { getList } from '../../utils/axiosUtils';
import PostListCardList from './CardList';

const PostList: FunctionComponent = () => {
    const [ posts, setPosts ] = useState<postType[]>([]);

    useEffect(() => {
        const getInitData = async () => {
            const { data, status } = await getList("/posts");
            
            if (status != 200) {
                return {data: undefined, status};
            }

            setPosts([...data]);
        };
        getInitData();
    }, []);

    return (
        <>
            {posts.length === 0 ? 'empty' : <PostListCardList posts={posts} />}
        </>
    );
};

export default PostList;
