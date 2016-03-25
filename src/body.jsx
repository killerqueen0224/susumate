import React from 'react'
import { Navbar, Nav,NavDropdown,NavItem,MenuItem } from 'react-bootstrap';

export default class Body extends React.Component {
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
      body: {
        background: "red",
        height: "2600",
        width: "600",
        paddingTop: "70px"
      }
    }
    return (
      <div style={style.body}>あいうえおかきくけこさしすせそたちつてと</div>
    );
  }
}
