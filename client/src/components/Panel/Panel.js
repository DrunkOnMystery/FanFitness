import React from "react";
import "./style.css";

function Panel( {children} ) {
    return <div className="panel callout radius pOne">{children}</div>;
}

export default Panel;
