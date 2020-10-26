import { useState } from "react";

export function useTimer() {
    const [seconds, setSeconds] = useState(20);

    const interval = setInterval(() => {
        if (seconds === 0) {
            clearInterval();
        } else {
            setSeconds(seconds - 1);
        }
    }, 1000);

    return [interval, seconds, () => setSeconds(20)];
}