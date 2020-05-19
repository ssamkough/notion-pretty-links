import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const PathItem = (pathItem: any) => {
    const item = pathItem.pathItem;
    return (
        <div className="path-item-outer-container">
            <div className="path-item-inner-container">
                <Row className="float-right">
                    <Col>
                        <Button type="submit" value="Close" aria-label="Close" className="close" variant="light">
                            <span aria-hidden="true">&times;</span>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span className="path-item-key">Old Path:</span>{' '}
                    </Col>
                    <Col>
                        <span>{item.replaced_path}</span>
                    </Col>
                </Row>
                <Row>
                    <Col className="path-item-key ml-3">
                        <span>New Path:</span>{' '}
                    </Col>
                    <Col>
                        <span>{item.new_path}</span>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default PathItem;
