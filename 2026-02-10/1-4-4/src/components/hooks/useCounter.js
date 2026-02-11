import { useState } from "react";

export default function useCounter(initialValue = 0, options = {}) {
    const { min, max } = options;
    const [count, setCount] = useState(initialValue);

    function increase() {
        setCount(prev => {
            if (max !== undefined && prev >= max) return prev;
            return prev + 1;
        });
    }

    function decrease() {
        setCount(prev => {
            if (min !== undefined && prev <= min) return prev;
            return prev - 1;
        });
    }

    function reset() {
        setCount(initialValue);
    }

    return { count, increase, decrease, reset };
}
