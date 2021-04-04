import { Box, Button, createStyles, makeStyles } from '@material-ui/core';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { postType } from '../../types/post';
import { getList } from '../../utils/axiosUtils';
import PostListCardList from './CardList';

const useStyles = makeStyles(() =>
    createStyles({
        boxStyle: {
            textAlign: 'right',
            paddingRight: 5,
        },
    }),
);

const PostList: FunctionComponent = () => {
    const classes = useStyles();
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
            <Box className={classes.boxStyle}>
                <Button color="primary">Add New Post</Button>
            </Box>
            {posts.length === 0 ? 'empty' : <PostListCardList posts={posts} />}
        </>
    );
};

export default PostList;
