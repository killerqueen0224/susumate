import React from 'react'
import { Navbar, Nav,NavDropdown,NavItem,MenuItem } from 'react-bootstrap';

export default class Header extends React.Component {
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
        // background: "url('images/logo.png')",
        // height:"10px",
        // width:"102px",
        // display:"block"
        color: "#30bbfe !important",
        // backgroundColor: "#d5d5d5",
        letterSpacing: "-1px",
        fontSize:"28px",
        //textShadow: "2px 2px 4px #BBBBBB"
      },
      navbar: {
        boxShadow: "0 0 10px",
        backgroundColor: "#FFFFFF"
      }
    }
    return (
      <Navbar fixedTop style={style.navbar}>
        <Navbar.Header>
          <Navbar.Brand>
            <a style={style.logo} href="#">SUSUMATE</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
        </Nav>
      </Navbar>
    );
  }
}
