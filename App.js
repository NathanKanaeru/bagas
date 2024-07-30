import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

const App = () => (
    <Router>
        <Header />
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Sidebar />
                </Grid>
                <Grid item xs={9}>
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/settings" component={Settings} />
                    </Switch>
                </Grid>
            </Grid>
        </Container>
    </Router>
);

export default App;
