import { Button, createStyles, Grid, makeStyles, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';
import { postType } from '../../types/post';

type Prop = {
    post: postType,
};

const postDetailStyles = makeStyles(() =>
    createStyles({
        btnGridStyle: {
            textAlign: 'right',
            marginTop: 100,
        },
        btnStyle: {
            marginRight: 10,
        },
        contentGridStyle: {
            marginTop: 120,
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
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

    const handleOtherPostsButtonClick = () => {
        router.push('/posts');
    };

    const handleModifyButtonClick = () => {
        // router.push('/posts/edit');
    }

    const classes = postDetailStyles();

    return (
        <Grid container={true}>
            <Grid item={true} md={12}>
                <Typography variant="h2">{title}</Typography><br />
                {createdAt}
            </Grid>
            <Grid item={true} md={12} className={classes.contentGridStyle}>
                <Typography variant="h5">{content}</Typography>
            </Grid>
            <Grid item={true} md={12} className={classes.btnGridStyle}>
                <Button color="default" variant="contained" className={classes.btnStyle} onClick={handleOtherPostsButtonClick}>Other Posts..</Button>
                <Button color="primary" variant="contained" className={classes.btnStyle}>Modify</Button>
                <Button disabled variant="contained" className={classes.btnStyle}>Delete</Button>
            </Grid>
        </Grid>
    );
};

export default PostDetail;
