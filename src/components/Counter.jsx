import React, { Component } from "react";
import { Badge, Button } from "react-bootstrap";

export class Counter extends Component {
  render() {
    return (
      <div>
        <Badge bg="secondary">{this.props.value}</Badge>
        <Button onClick={this.props.increase} variant="primary m-2">
          +
        </Button>
        <Button onClick={this.props.decrease} variant="primary m-2">
          -
        </Button>
        <Button onClick={this.props.delete} variant="danger m-2">
          Delete
        </Button>
      </div>
    );
  }
}

export default Counter;
