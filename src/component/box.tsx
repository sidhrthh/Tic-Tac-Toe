import React from "react";

interface BoxProps  {
    value?: string | null;
    onClick?: () => void
}

const Box : React.FC<BoxProps> = (props) => {
    return (
        <div
        onClick={props.onClick}
        style={{
            border: "1px solid",
            height: "100px",
            width: "100%",
            display: "flex",
            fontSize: "35px",
            fontWeight: "bold", 
            justifyContent: "center",
            alignItems: "center",
          }} className="box">
           {props.value}
        </div>
    )
}

export default Box;