import React from "react";

const HighLight = ({children})=> {
    return React.cloneElement(children,{
        style:{...children.props.style, color:'red'},
        onClick:(e)=>{children.props.onClick?.(e);alert("here")}
    })
}

export default HighLight;