import React, { useState, useEffect } from 'react';
import { Form, Button, Toast } from 'react-bootstrap';

import PathList from '../components/List/PathList';

const MainPage = () => {
    const [pathData, setPathData] = useState({});
    const [isError, setIsError] = useState(false);
    const [show, setShow] = useState(false);
    const [btnClick, setBtnClick] = useState(false);

    useEffect(
        () => {
            console.log('ran use effect');
            const fetchData = async () => {
                setIsError(false);

                try {
                    await chrome.storage.sync.get(null, function (items: any) {
                        setPathData(items);
                    });
                } catch (error) {
                    setIsError(true);
                    console.log('Error:\n', error);
                }
            };

            fetchData();
        },
        [
            /* btnClick */
        ],
    );

    const replaceBtnClicked = () => {
        setShow(true);

        setTimeout(function () {
            if (btnClick) {
                setBtnClick(false);
            } else {
                setBtnClick(true);
            }
        }, 1000);
    };

    return (
        <div id="main-page">
            <div id="replacer-page">
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
                        <Button id="replace-btn" onClick={replaceBtnClicked} value="Submit" variant="dark">
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
            <div id="list-page">
                {isError ? (
                    <div>Something went wrong...</div>
                ) : Object.keys(pathData).length === 0 ? (
                    <div>No items at the moment!</div>
                ) : (
                    <PathList pathObj={pathData} />
                )}
            </div>
        </div>
    );
};

export default MainPage;
