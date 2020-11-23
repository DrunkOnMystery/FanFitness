import React from "react";
import "./style.css";

//the second of two component files for Panels, which are Foundation's version of Jumbotrons
function Panel2( {children} ) {
    return <div className="panel callout radius pTwo">{children}</div>;
}

export default Panel2;
