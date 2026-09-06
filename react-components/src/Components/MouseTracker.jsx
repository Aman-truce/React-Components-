import React from "react";
import { useState } from 'react';

const MouseTracker = ({ render }) => {

    const [poistion, setPoistion] = useState({ x: 0, y: 0 })

    const onMove = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        setPoistion({ x: x, y: y })
    }

    return (
        <div onMouseMove={onMove} style={{ height: "100%", width: "100%", cursor:'none' }}>
            {render({ x: poistion.x, y: poistion.y })}
        </div>
    )
}


export default MouseTracker;