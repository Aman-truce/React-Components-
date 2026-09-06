import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import HighLight from "./HighLight";
import MouseTracker from "../MouseTracker";


const Popover = () => {
    const [value, setValue] = useState("")

    const inputRef = useRef(null)
    const onChange = (e) => {
        console.log("value_here_001", e.target.value)
        setValue(e.target.value)
    }

    useEffect(() => {
        const rect = inputRef.current.getBoundingClientRect();
        console.log(rect, 'data_here_using_jsd')
    }, [])

    const doFocus = () => {
        inputRef.current?.focus()
    }
    const popover = createPortal(
        <div style={{ width: '100%', height: "600px", background: 'white', border: "1px solid #dedede" }}>

        </div>,
        document.body
    )
    return (<div style={{ overflow: "hidden", height: '600px', border: "1px solid" }}>
        <MouseTracker render={({ x, y }) => {
            return (
                <div
                    style={{
                        position: "fixed",
                        top: y,
                        left: x,
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        backgroundColor: "red",
                        // pointerEvents: "none", 
                    }}
                />
            )
        }} />
        {popover}
        <HighLight>
            <button onClick={doFocus}>
                highligh button
            </button>
        </HighLight>
        <div>
            <label>Write here </label>
            <input ref={inputRef} type="text" onChange={onChange} value={value} />
        </div>

    </div>)
}

export default Popover;