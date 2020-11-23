import React from "react";
import "./style.css";

//the first of two component files for Panels, which are Foundation's version of Jumbotrons
function Panel( {children} ) {
    return <div className="panel callout radius pOne">{children}</div>;
}

export default Panel;
