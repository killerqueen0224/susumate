import React, {Component} from 'react'
import { Navbar, Nav,NavDropdown,NavItem,MenuItem } from 'react-bootstrap';

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    handleClick() {
        this.setState({
            count: this.state.count + 1
        });
    }


    render() {
      var style = {
        logo: {
          background: "url('images/SUSUMATE-logo.png')",
          height: "45",
          width: "136"
        }
      }
        return (
          <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a style={style.logo} href="#"></a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">Link</NavItem>
    <NavItem eventKey={2} href="#">Link</NavItem>
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.3}>Separated link</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>
        );
    }
}
