import React from 'react'

/*
  Exercise 2: useRef
  --------------------------------
  Build a component with an input and a "Focus" button that focuses the input.
  Then add a render counter using a ref that logs how many times the
  component rendered, without causing extra renders.

  Done when: typing updates the counter in the console, but the counter
  itself never triggers a render.
*/

export default function FocusCounter() {
  const [value,setValue]=useState("");
  // TODO: inputRef with useRef, "Focus" button calling inputRef.current.focus()


  // TODO: renderCountRef with useRef, incremented in the render body, logged to console
  return (<div>

    <input id="input-focus" onClick={(e)=>setValue(e.target.value)} />

  </div>)
}
