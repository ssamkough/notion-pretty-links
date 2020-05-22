import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const PathItem = (replacedPath: any, newPath: any) => {
    console.log('replaced path: ', replacedPath);
    console.log('new path: ', newPath);

    let rPath = replacedPath.replacedPath;
    let nPath = replacedPath.newPath;

    const removeItem = () => {
        chrome.storage.sync.remove(nPath, function () {
            console.log('Removed ' + nPath + ', ' + rPath + '!');
        });
    };

    return (
        <div className="path-item-outer-container">
            <div className="path-item-inner-container">
                <Row className="float-right">
                    <Col>
                        <Button
                            onClick={removeItem}
                            type="submit"
                            value="Close"
                            aria-label="Close"
                            className="close"
                            variant="light"
                        >
                            <span aria-hidden="true">&times;</span>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="path-item-key">
                        <span>New Path:</span>{' '}
                    </Col>
                    <Col>
                        <span>{rPath.substring(0, 7)}...</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span className="path-item-key ml-3">Old Path:</span>{' '}
                    </Col>
                    <Col>
                        <span>{nPath.substring(0, 7)}...</span>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default PathItem;
