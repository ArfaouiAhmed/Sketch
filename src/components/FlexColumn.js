import React from "react";

export default function FlexColumn({ children, size = 1 }) {
    return <div style={{ flex: size }}>{children}</div>;
}