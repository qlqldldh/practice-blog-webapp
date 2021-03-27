import { Box, createStyles, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { FunctionComponent } from 'react';

const useStyles = makeStyles(() =>
    createStyles({
        gridContainer: {
            marginLeft: 10,
            marginRight: 10,
        },
        gridItem: {
            textAlign: 'right',
        },
    }),
);

const Header: FunctionComponent = () => {
    const classes = useStyles();

    return (
        <Grid container={true} className={classes.gridContainer}>
            <Grid item={true} md={8}>
                <h1>Dean's Blog</h1>
            </Grid>
            <Grid item={true} md={4} className={classes.gridItem}>
                <Box display='flex' flexDirection="column">
                    <Box height="40px"/>
                    <Box display="flex" flexDirection="row">
                        <Box flexGrow={1} mx={3}>
                            <Typography variant={'h6'}>Posts</Typography>
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
