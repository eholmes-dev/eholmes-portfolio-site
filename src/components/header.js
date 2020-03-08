import { SocialIcon } from 'react-social-icons';
import PropTypes from "prop-types"
//import React from "react"
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar fixed="top" light expand="sm" light>
      <div className="container">
      <NavbarBrand href="/">{siteTitle}</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="eholmes-portfolio-site/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="eholmes-portfolio-site/about/">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="eholmes-portfolio-site/blog/">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="eholmes-portfolio-site/skills/">Skills</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="eholmes-portfolio-site/Projects/">Projects</NavLink>
          </NavItem>
          
          
        </Nav>
        <div className="social-share-links">
        <ul className="social-links-list">
            
             <li>
             <SocialIcon target="_blank" url="https://www.linkedin.com/in/echolmes/" />
             </li>
            
            <li>
            <SocialIcon target="_blank" url="https://github.com/eholmes-dev" bgColor="#000000"/>  
            </li>
            
            <li>
            <SocialIcon target="_blank" url="https://www.facebook.com/eholmes.dev" /> 
            </li>
            
            <li>
            <SocialIcon target="_blank" url="https://www.instagram.com/ethanholmes7/"/>
            </li>
        </ul>
        </div>
      </Collapse>
      </div>
        
      </Navbar>
    </div>
    );
  }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
