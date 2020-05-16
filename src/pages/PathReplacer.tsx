import React from "react";
import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";

const PathList = () => {
  return (
    <div>
      <Row>
        <Col>
          <label htmlFor="path-to-replace">Path to Replace</label>
          <InputGroup className="mb-3">
            <FormControl
              id="path-to-replace"
              placeholder="Path to Replace"
              aria-label="Path-to-Replace"
              aria-describedby="path-to-replace"
            />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <label htmlFor="new-path">New Path</label>
          <InputGroup className="mb-3">
            <FormControl
              id="new-path"
              placeholder="New Path"
              aria-label="New-Path"
              aria-describedby="new-path"
            />
          </InputGroup>
        </Col>
      </Row>
      <Row className="float-right">
        <Col>
          <Button type="submit" value="Submit" variant="dark">
            <span className="replace-btn">Replace</span>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default PathList;
