import { Box, createStyles, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';
import { headerStyles } from '../styles/components/header';


const Header: FunctionComponent = () => {
    const router =useRouter();
    const classes = headerStyles();

    const handlePostsClick = () => {
        router.push('/posts');
    };

    return (
        <Grid container={true} className={classes.gridContainer}>
            <Grid item={true} md={8}>
                <h1>Dean's Blog</h1>
                <h3>Posts about what I learned, studied, etc.</h3>
            </Grid>
            <Grid item={true} md={4} className={classes.gridItem}>
                <Box display='flex' flexDirection="column">
                    <Box display="flex" flexDirection="row">
                        <Box flexGrow={1} mx={3}>
                            <Link onClick={handlePostsClick} color="inherit">
                                <Typography variant={'h6'}>Posts</Typography>
                            </Link>
                        </Box>
                        <Box mx={3}>
                            <Typography variant={'h6'}>About</Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Header;
