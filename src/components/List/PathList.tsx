import React from 'react';
import { Row, Col } from 'react-bootstrap';

import PathItem from './PathItem';

const PathList = ({ pathItems }: { pathItems: any }) => {
    console.log('pathList page', pathItems);
    return (
        <div>
            <Row>
                <Col id="path-item-list">
                    {Object.keys(pathItems).map((key: any, e: number) => (
                        <PathItem key={e}>
                            {key}
                            {': '}
                            {pathItems[key]}
                        </PathItem>
                    ))}
                </Col>
            </Row>
        </div>
    );
};

export default PathList;
