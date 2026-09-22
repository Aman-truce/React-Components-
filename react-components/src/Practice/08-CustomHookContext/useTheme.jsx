import React from 'react'

/*
  Exercise 8: useContext + custom hook
  --------------------------------
  Wrap the theme context in a useTheme() hook that throws a clear error if
  it's used outside the Provider.

  Done when: rendering a consumer outside the Provider shows your custom
  error message.
*/

export const ThemeContext = React.createContext(undefined)

export function useTheme() {
  // TODO: const ctx = useContext(ThemeContext)
  // TODO: if (ctx === undefined) throw new Error('useTheme must be used within a ThemeProvider')
  // TODO: return ctx
}
