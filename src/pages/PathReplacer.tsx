import React, { useState } from 'react';
import { Form, Button, Toast } from 'react-bootstrap';

const PathList = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Path to Replace</Form.Label>
                    <Form.Control
                        id="path-to-replace-input"
                        placeholder="Path to Replace"
                        aria-label="Path-to-Replace"
                        aria-describedby="path-to-replace"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>New Path</Form.Label>
                    <Form.Control
                        id="new-path-input"
                        placeholder="New Path"
                        aria-label="New-Path"
                        aria-describedby="new-path"
                    />
                </Form.Group>
                <div className="float-right">
                    <Button id="replace-btn" onClick={() => setShow(true)} value="Submit" variant="dark">
                        <span className="replace-btn-text">Replace</span>
                    </Button>
                </div>
            </Form>

            <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide className="added-path-toast">
                <Toast.Header>
                    <strong className="mr-auto">Added Path</strong>
                </Toast.Header>
                <Toast.Body>Path __________ added!</Toast.Body>
            </Toast>
        </div>
    );
};

export default PathList;
