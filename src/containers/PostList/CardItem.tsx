import { Divider, Grid } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { postType } from '../../types/post';
// import Link from 'next/link';
import Link from '@material-ui/core/Link';
import { useRouter } from 'next/router';
import { postListStyles } from '../../styles/pages/postList';

type ItemProp = {
    post: postType,
};

const PostListCardItem: FunctionComponent<ItemProp> = ({ post }) => {
    const classes = postListStyles();
    const router = useRouter();
    const {
        id,
        title,
        createdAt,
    } = post;

    const handleTitleClick = () => {
        router.push(`/posts/${id}`);
    };

    return (
        <Grid container={true} className={classes.gridCont}>
            <Grid item={true} md={12}>
                <Link onClick={handleTitleClick} color="inherit">
                    <h1>{title}</h1>
                </Link>
            </Grid>
            <Grid item={true} md={12}>
                {createdAt}
            </Grid>
            <Grid item={true} md={12} className={classes.divider}><Divider light={true} /></Grid>
        </Grid>
    );
};

export default PostListCardItem;
