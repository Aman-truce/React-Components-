import React, { useState } from 'react'
import { createPortal } from 'react-dom'
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
  const [showPortal, setPortal] = useState(false);
  const portal = createPortal(
    <div
      onClick={() => console.log('box clicked')}
      style={{ height: '200px', background: 'teal', width: '100%' }}
    >
      Portal box
    </div>,
    document.body
  )
  return (<>
    <button onClick={() => setPortal(prevValue => !prevValue)}>
      Open Portal
    </button>
    <div
      onClick={() => console.log('parent clicked')}
      style={{ overflow: 'hidden', background: 'gray', height: '50px', width: '100%' }}
    >
      {showPortal && portal
      }
    </div>
  </>
  )
}
