import React, {useRef} from 'react'

/*
  Exercise 3: getBoundingClientRect
  --------------------------------
  Build a box and a "Measure" button that prints the box's top, left,
  width, and height on screen. Then scroll the page and click again.

  Done when: you can explain why `top` changed after scrolling.
*/

export default function MeasureBox() {
  // TODO: boxRef with useRef
  const boxRef = useRef();
  const doMeasure = ()=> {
    const poistion = boxRef.current.getBoundingClientRect();
    console.log(poistion,'poistion-data_here_001');
  }
  
  return (  
    (<div style={{position:'relative'}}>
      <button onClick={doMeasure} style={{position:'sticky', top:0}}>
        Measure
      </button>
      <div style={{ height: '400px', width: "100%", padding: '30px', overflow: 'auto' }}>

        <div style={{ height: '600px' }} />

        <div ref={boxRef} style={{ height: "200px", width: "400PX", border: '1px solid #dedede', background:'blue' }}>
          Box
        </div>

        <div style={{ height: '600px' }} />

      </div>
    </div>
    )

  )
}
