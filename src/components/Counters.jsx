import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Counter from "./Counter";

export class Counters extends Component {
  render() {
    return (
      <div>
        {this.props.counters.map((c) => (
          <Counter
            key={c.id}
            value={c.value}
            increase={() => this.props.handleIncrease(c.id)}
            decrease={() => this.props.handleDecrease(c.id)}
            delete={() => this.props.handleDelete(c.id)}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
