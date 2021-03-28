import { createStyles, Grid, makeStyles } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { postType } from '../../types/post';

type ItemProp = {
    post: postType,
};

const useStyles = makeStyles(() =>
    createStyles({
        gridCont: {
            marginBottom: 10,
        },
    }),
);

const PostListCardItem: FunctionComponent<ItemProp> = ({post}) => {
    const classes = useStyles();

    return (
        <Grid container={true} className={classes.gridCont}>
            <Grid item={true} md={12}><hr /></Grid>
            <Grid item={true} md={12}>
                <h3>{post.title}</h3>
            </Grid>
            <Grid item={true} md={12}>
                {post.createdAt}
            </Grid>
        </Grid>
    );
};

export default PostListCardItem;
