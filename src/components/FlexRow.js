import React from "react";

export default function FlexRow({ children }) {
    return (
        <div style={{ display: "flex", flexFlow: "row wrap" }}>{children}</div>
    );
}