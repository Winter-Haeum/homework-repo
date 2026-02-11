import useCounter from "./hooks/useCounter";

export default function Counter() {
    const { count, increase, decrease, reset } = useCounter(0, { min: 0, max: 10 });

    return (
        <div className="background-wrap">
            <div className="counter-box">
                <div className="counter-value">{count}</div>

                <div className="counter-buttons">
                    <button className="btn-increase" onClick={increase}>+</button>
                    <button className="btn-decrease" onClick={decrease}>-</button>
                    <button className="btn-reset" onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    );
}
