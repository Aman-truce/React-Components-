import React from 'react'

/*
  Exercise 6: Inversion of Control
  --------------------------------
  Build a <Toggle> two ways.
  First, rigid: it takes an autoCloseAfter={3000} prop and closes itself.
  Second, inverted: it passes { on, toggle, setOn } to its children and the
  caller decides when to close (e.g. "close only after an API call succeeds").

  Done when: you can use the inverted version to build a behaviour the
  rigid one can't.
*/

export function RigidToggle({ autoCloseAfter }) {
  // TODO: on state, setTimeout(() => setOn(false), autoCloseAfter) when opened
  return null
}

export function InvertedToggle({ children }) {
  // TODO: on state, toggle fn, setOn — pass all three to children({ on, toggle, setOn })
  return null
}
