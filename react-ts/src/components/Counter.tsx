import React, { Component } from "react";
import CounterValue from "./CounterValue";

interface ICounterProps {
  initialValue?: number
}

interface ICounterState {
  value: number
}

export default class Counter extends Component<ICounterProps, ICounterState> {

  public state = { value: this.props.initialValue || 420 }

  render() {
    return (
      <div>
        <CounterValue counter={this.state.value} />
      </div>
    )
  }
}