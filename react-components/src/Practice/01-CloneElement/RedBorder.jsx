import React from 'react'

/*
  Exercise 1: React.cloneElement
  --------------------------------
  Build <RedBorder> that wraps any child and adds a red border.
  Then make it merge styles, so:
    <RedBorder><div style={{ padding: 20 }}>Hi</div></RedBorder>
  keeps the padding AND gets the border.

  Done when: the child's own style and onClick still work alongside yours.
*/

export default function RedBorder({ children }) {
  return React.cloneElement(children, {
    style: { ...children.props.style, border: '2px solid red' }, // merge, don't replace
    onClick: (e) => {
      children.props.onClick?.(e) // keep child's own onClick working
      console.log('RedBorder wrapper click')
    },
  })
}

export function RedBorderDemo() {
  return (
    <RedBorder>
      <div style={{ padding: 20 }} onClick={() => console.log('child clicked')}>
        Hi
      </div>
    </RedBorder>
  )
}
