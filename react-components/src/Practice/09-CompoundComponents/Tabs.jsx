import React from 'react'

/*
  Exercise 9: Compound Components
  --------------------------------
  Build <Tabs> with <Tabs.List>, <Tabs.Tab>, and <Tabs.Panel> sharing the
  active index via context.

    <Tabs>
      <Tabs.List><Tabs.Tab index={0}>A</Tabs.Tab><Tabs.Tab index={1}>B</Tabs.Tab></Tabs.List>
      <Tabs.Panel index={0}>Panel A</Tabs.Panel>
      <Tabs.Panel index={1}>Panel B</Tabs.Panel>
    </Tabs>

  Done when: clicking tabs switches panels, and you can rearrange the
  pieces without breaking it.
*/

const TabsContext = React.createContext(null)

export function Tabs({ children }) {
  // TODO: activeIndex state + Provider
  return null
}

Tabs.List = function TabsList({ children }) {
  return null // TODO: just a wrapper, e.g. <div role="tablist">{children}</div>
}

Tabs.Tab = function Tab({ index, children }) {
  // TODO: read { activeIndex, setActiveIndex } from TabsContext, render button
  return null
}

Tabs.Panel = function Panel({ index, children }) {
  // TODO: read activeIndex from TabsContext, render children only if index matches
  return null
}
