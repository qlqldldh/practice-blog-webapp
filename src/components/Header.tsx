import { Grid, Typography } from '@material-ui/core';
import React, { FunctionComponent } from 'react';


const Header: FunctionComponent = () => {
    return (
        <>
            <h1>Blog for Jinsu</h1>
            <Grid container={true}>
                <Grid item={true} md={6}>
                    <Typography>Blog</Typography>
                </Grid>
                <Grid item={true} md={6}>
                    <Typography>About</Typography>
                </Grid>
            </Grid>
        </>
    )
};

export default Header;
