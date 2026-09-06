import React, { useState } from "react";

export const Toggle = ({ children }) => {
    const [on, setOn] = useState(false);

    const toggle = () => {
        setOn(!on)
    }

    return (
        <>
            {children({on,toggle})}
        </>

    )
}