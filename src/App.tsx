import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import PathReplacer from './pages/PathReplacer';
import List from './pages/List';

const App = () => {
    return (
        <Router>
            <Container id="app-outer-container">
                <Container id="app-inner-container">
                    <Row id="row-nav-bar">
                        <Col>
                            <NavigationBar />
                        </Col>
                    </Row>
                    <Row id="row-page">
                        <Col>
                            <Switch>
                                <Route path="/">
                                    <PathReplacer />
                                </Route>
                                <Route path="/list">
                                    <List />
                                </Route>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Router>
    );
};

export default App;
