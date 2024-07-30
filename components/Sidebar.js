import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Sidebar = () => (
    <div>
        <List component="nav">
            <ListItem button component={Link} to="/">
                <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/settings">
                <ListItemText primary="Settings" />
            </ListItem>
        </List>
    </div>
);

export default Sidebar;
