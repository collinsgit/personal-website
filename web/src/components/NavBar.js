import React from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const sections = [];
    this.props.sections.forEach(section => {
      sections.push(
        <NavItem key={section}>
          <NavLink href={'#' + section.replace(' ', '_')}>
            {section}
          </NavLink>
        </NavItem>
      );
    });

    return (
      <Navbar color='dark' dark expand='md' fixed='top' id='navbar'>
        <NavbarBrand>
          collin potts
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto'  navbar>
            {sections}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;