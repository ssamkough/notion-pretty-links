import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const NavigationBar = () => {
    const location = useLocation().pathname;
    const initialState = location === '/list' ? 2 : 1;

    const [activeLink, setActiveLink] = useState(initialState);

    const switchActive = (eventKey: any) => {
        setActiveLink(eventKey);
    };

    return (
        <div>
            <Navbar>
                <Navbar.Brand>
                    <h6>
                        Notion Pretty Links{' '}
                        <span role="img" aria-label="link-emoji">
                            🔗
                        </span>
                    </h6>
                </Navbar.Brand>
                <Nav activeKey={activeLink} onSelect={switchActive}>
                    <Nav.Link as={Link} to="/" eventKey="1">
                        Replacer
                    </Nav.Link>
                    <Nav.Link as={Link} to="/list" eventKey="2">
                        List
                    </Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default NavigationBar;
