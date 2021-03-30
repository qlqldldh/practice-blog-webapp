import { Button, createStyles, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { postType } from '../../types/post';

type Prop = {
    post: postType,
};

const postDetailStyles = makeStyles(() =>
    createStyles({
        btnGridStyle: {
            textAlign: 'right',
        },
        btnStyle: {
            marginRight: 10,
        },
    }),
);

const PostDetail: FunctionComponent<Prop> = ({ post }) => {
    const {
        id,
        title,
        createdAt,
        content,
    } = post;

    const classes = postDetailStyles();

    return (
        <Grid container={true}>
            <Grid item={true} md={12}>
                <Typography variant="h1">{title}</Typography>
                {createdAt}
            </Grid>
            <Grid item={true} md={12}>
                <Typography variant="body1">{content}</Typography>
            </Grid>
            <Grid item={true} md={12} className={classes.btnGridStyle}>
                <Button color="default" variant="contained" className={classes.btnStyle}>Other Posts..</Button>
                <Button color="primary" variant="contained" className={classes.btnStyle}>Modify</Button>
                <Button color="secondary" variant="contained" className={classes.btnStyle}>Delete</Button>
            </Grid>
        </Grid>
    );
};

export default PostDetail;
