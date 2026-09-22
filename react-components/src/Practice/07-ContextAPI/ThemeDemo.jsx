import React from 'react'

/*
  Exercise 7: Context API
  --------------------------------
  Create a ThemeContext with "light"/"dark". Put the Provider in a top
  component and a toggle button three levels deep, with no props passed
  through the middle components.

  Done when: the deep button switches the theme and the middle components
  don't receive a theme prop.
*/

export const ThemeContext = React.createContext(null)

export function ThemeDemo() {
  // TODO: theme state + Provider here
  // TODO: render <LevelOne /> with no theme prop passed down
  return null
}

function LevelOne() {
  return null // TODO: render <LevelTwo />
}

function LevelTwo() {
  return null // TODO: render <ThemeToggleButton />, read theme via useContext(ThemeContext)
}
