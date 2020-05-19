import React from 'react';
import { Row, Col } from 'react-bootstrap';

import PathItem from './PathItem';

const PathList = ({ pathItems }: { pathItems: any }) => {
    return (
        <div>
            <Row>
                <Col>
                    {pathItems &&
                        pathItems.map((pathItem: any, e: number) => {
                            return <PathItem pathItem={pathItem} key={e} />;
                        })}
                </Col>
            </Row>
        </div>
    );
};

export default PathList;
