import React from 'react'

/*
  Exercise 4: createPortal
  --------------------------------
  Create a parent div with overflow: hidden; height: 50px. Inside it,
  render a 200px-tall box normally, which gets clipped. Then render it
  with createPortal into document.body instead.

  Done when: the portal version shows fully, and an onClick on the parent
  still fires when you click the portaled box (event bubbling through the
  React tree, not the DOM tree).
*/

export default function PortalDemo() {
  // TODO: parent div with overflow: hidden, height: 50px, onClick logging "parent clicked"
  // TODO: child box (200px tall) rendered via ReactDOM.createPortal(..., document.body)
  return null
}
