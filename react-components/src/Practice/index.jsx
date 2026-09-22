import React, { useState } from 'react'
import { exercises } from './exercises'

/*
  Practice switcher — pick an exercise from the list and it renders below.
  Fill in the TODOs in each exercise file one at a time, in order.
*/
export default function Practice() {
  const [activeId, setActiveId] = useState(exercises[0].id)
  const active = exercises.find(e => e.id === activeId)

  return (
    <div style={{ display: 'flex', gap: 24, padding: 16, fontFamily: 'sans-serif' }}>
      <nav style={{ minWidth: 220 }}>
        {exercises.map(({ id, title }) => (
          <div key={id}>
            <button
              onClick={() => setActiveId(id)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '6px 8px',
                marginBottom: 4,
                fontWeight: id === activeId ? 'bold' : 'normal',
              }}
            >
              {id}. {title}
            </button>
          </div>
        ))}
      </nav>

      <main style={{ flex: 1, borderLeft: '1px solid #ccc', paddingLeft: 24 }}>
        <h2>{active.id}. {active.title}</h2>
        {active.Component ? <active.Component /> : <p>Hook-only exercise — use it inside another exercise's file.</p>}
      </main>
    </div>
  )
}
