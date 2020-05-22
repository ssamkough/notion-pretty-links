import React from 'react';
import { Row, Col } from 'react-bootstrap';

import PathItem from './PathItem';

const PathList = ({ pathObj }: { pathObj: any }) => {
    console.log('pathList page: ', pathObj);
    return (
        <div>
            <Row>
                <Col id="path-item-list">
                    {Object.keys(pathObj).map((key: any, e: number) => (
                        <PathItem key={e} replacedPath={pathObj[key]} newPath={key} />
                    ))}
                </Col>
            </Row>
        </div>
    );
};

export default PathList;
