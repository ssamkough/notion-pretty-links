import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
    const [activeLink, setActiveLink] = useState(1);

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
                    <Nav.Link id="nav-link-replacer" eventKey="1">
                        Replacer
                    </Nav.Link>
                    <Nav.Link id="nav-link-list" eventKey="2">
                        List
                    </Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default NavigationBar;
