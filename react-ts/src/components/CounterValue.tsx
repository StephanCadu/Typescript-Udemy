import React from "react";

interface CounterValueProps {
  counter: number
}

export default function CounterValue(props: CounterValueProps) {
  return (
    <div>
      <p>{ props.counter }</p>
    </div>
  )
}