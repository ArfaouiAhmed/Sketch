import React from "react";

export default function Column({ children, size = 1 }) {
    return <div style={{ flex: size, flexBasis: '0%' }}>{children}</div>;
}