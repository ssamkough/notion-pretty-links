import React from 'react';
import { Row, Col } from 'react-bootstrap';

import PathItem from './PathItem';

const PathList = (props: { pathObj: any; setXBtn: any }) => {
    console.log('pathList:', props.setXBtn);
    return (
        <div>
            <Row>
                <Col id="path-item-list">
                    {Object.keys(props.pathObj).map((key: any, e: number) => (
                        <PathItem key={e} replacedPath={props.pathObj[key]} newPath={key} setXButton={props.setXBtn} />
                    ))}
                </Col>
            </Row>
        </div>
    );
};

export default PathList;
