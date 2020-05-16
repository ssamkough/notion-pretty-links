import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import PathReplacer from "./pages/PathReplacer";
import PathList from "./pages/PathList";

const App = () => {
  return (
    <Router>
      <Container id="app-outer-container">
        <Container id="app-inner-container">
          <Row>
            <Col>
              <NavigationBar />
            </Col>
          </Row>
          <Row>
            <Col>
              <Switch>
                <Route exact path="/" component={PathReplacer} />
                <Route path="/list" component={PathList} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Container>
    </Router>
  );
};

export default App;
