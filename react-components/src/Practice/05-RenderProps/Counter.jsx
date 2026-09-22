import React from 'react'

/*
  Exercise 5: Render Props
  --------------------------------
  Build <Counter> that owns the count state but lets the caller decide the UI:

    <Counter>{({ count, increment }) => <button onClick={increment}>{count}</button>}</Counter>

  Done when: you can render the same Counter as a button in one place and
  as plain text plus a link in another.
*/

export default function Counter({ children }) {
  // TODO: own count state + increment fn, call children(...) with { count, increment }
  return null
}
