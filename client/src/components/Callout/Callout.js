import React from "react";

//Function for the Callout component
function Callout( {children} ) {
    return <div className="callout large">{children}</div>;
}

export default Callout;