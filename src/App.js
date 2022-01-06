import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Counters from "./components/Counters";
import Nav from "./components/Nav";

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
    ],
  };
  handleIncrease = (id) => {
    const counters = this.state.counters.map((c) => {
      if (c.id === id) {
        c.value += 1;
      }
      return c;
    });
    this.setState({ counters });
  };
  handleDecrease = (id) => {
    const counters = this.state.counters.map((c) => {
      if (c.id === id) {
        c.value -= 1;
      }
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = (id) => {
    const counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters });
  };
  resetAll = () => {
    const counters = this.state.counters.map(function (c) {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <Nav number={this.state.counters.filter((c) => c.value > 0).length} />
        <Button onClick={this.resetAll} variant="warning m-2">
          Reset
        </Button>
        <Counters
          counters={this.state.counters}
          handleIncrease={this.handleIncrease}
          handleDecrease={this.handleDecrease}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
