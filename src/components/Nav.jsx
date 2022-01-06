import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";

export class Nav extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light">
          <Container>
            <Navbar.Brand href="#home">{this.props.number}</Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Nav;
