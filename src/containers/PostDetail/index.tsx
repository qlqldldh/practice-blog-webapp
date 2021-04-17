import { Button, createStyles, Grid, makeStyles, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';
import { postType } from '../../types/post';
import { deleteItem } from '../../utils/axiosUtils';

type Prop = {
    post: postType,
};

const postDetailStyles = makeStyles(() =>
    createStyles({
        btnGridStyle: {
            textAlign: 'right',
            marginTop: 100,
            marginBottom: 100,
        },
        btnStyle: {
            marginRight: 10,
        },
        contentGridStyle: {
            marginTop: 120,
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
        },
        titleGridStyle: {
            marginTop: 50,
        },
    }),
);

const PostDetail: FunctionComponent<Prop> = ({ post }) => {
    const router = useRouter();
    const {
        id,
        title,
        createdAt,
        content,
    } = post;

    const handleOtherPostsClick = () => {
        router.push('/posts');
    };

    const handleDeleteClick = async () => {
        const response = await deleteItem('/posts', id);
        if (response.status === 200) {
            router.push('/posts');
        } else {
            alert('Error');
        }
    };

    const classes = postDetailStyles();

    return (
        <Grid container={true}>
            <Grid item={true} md={12} className={classes.titleGridStyle}>
                <Typography variant="h2">{title}</Typography><br />
                {createdAt}
            </Grid>
            <Grid item={true} md={12} className={classes.contentGridStyle}>
                <Typography variant="h5">{content}</Typography>
            </Grid>
            <Grid item={true} md={12} className={classes.btnGridStyle}>
                <Button color="default" variant="contained" className={classes.btnStyle} onClick={handleOtherPostsClick}>Other Posts..</Button>
                <Button disabled variant="contained" className={classes.btnStyle}>Modify</Button>
                <Button color="secondary" variant="contained" className={classes.btnStyle} onClick={handleDeleteClick}>Delete</Button>
            </Grid>
        </Grid>
    );
};

export default PostDetail;
