import React from "react";

interface ICounterValueProps {
  counter: number
}

export default function CounterValue(props: ICounterValueProps) {
  return (
    <div>
      <p>{ props.counter }</p>
    </div>
  )
}