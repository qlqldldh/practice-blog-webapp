import { Box, Button, createStyles, makeStyles } from '@material-ui/core';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { postListStyles } from '../../styles/pages/postList';
import { postType } from '../../types/post';
import { getList } from '../../utils/axiosUtils';
import PostListCardList from './CardList';


const PostList: FunctionComponent = () => {
    const router = useRouter();
    const classes = postListStyles();
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

    const handleAddButtonClick = () => {
        router.push('/posts/new');
    };

    return (
        <>
            <Box className={classes.postAddButtonStyle}>
                <Button color="primary" onClick={handleAddButtonClick}>Add New Post</Button>
            </Box>
            {posts.length === 0 ? 'empty' : <PostListCardList posts={posts} />}
        </>
    );
};

export default PostList;
