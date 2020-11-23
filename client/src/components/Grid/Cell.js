import React from "react";

// This Cell component is Foundation's version of Bootstrap's Rows and Columns. This allows the children to be passed down.
export function Cell({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}