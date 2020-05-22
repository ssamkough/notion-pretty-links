import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import NavigationBar from './components/NavigationBar';
import MainPage from './pages/MainPage';

const App = () => {
    return (
        <Container id="app-outer-container">
            <Container id="app-inner-container">
                <Row id="row-nav-bar">
                    <Col>
                        <NavigationBar />
                    </Col>
                </Row>
                <Row id="row-page">
                    <Col>
                        <MainPage />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default App;
