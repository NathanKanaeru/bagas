import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6">
                Dashboard
            </Typography>
        </Toolbar>
    </AppBar>
);

export default Header;
