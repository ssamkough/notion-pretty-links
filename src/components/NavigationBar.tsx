import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState(1);

  const handleSelect = (eventKey: any) => setActiveLink(eventKey);

  return (
    <div>
      <Navbar>
        <Navbar.Brand>
          <h5>Notion Pretty Links 🔗</h5>
        </Navbar.Brand>
        <Nav activeKey={activeLink} onSelect={handleSelect}>
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
