import React from 'react'

/*
  Exercise 11: Outside click
  --------------------------------
  Build a box that turns green when you click inside it and grey when you
  click outside it. Use a document listener and .contains().

  Done when: the listener is removed in the cleanup. Mount and unmount the
  box a few times and confirm only one listener fires.
*/

export default function ClickBox() {
  // TODO: boxRef, isInside state
  // TODO: useEffect -> document.addEventListener('mousedown', handler); return cleanup to remove it
  // TODO: handler checks boxRef.current.contains(e.target)
  return null
}
