import React, { FunctionComponent, useEffect, useState } from 'react';
import { postType } from '../types/post';
import { getList } from '../utils/axiosUtils';

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
    console.log(posts);

    return (
        <>
            {posts.map(post => <div>{post.title}</div>)}
        </>
    );
};

export default PostList;
