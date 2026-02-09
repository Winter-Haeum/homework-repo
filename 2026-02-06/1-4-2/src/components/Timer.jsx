import { useState, useEffect } from "react";

export default function Timer() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) return;

        const id = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(id);
        };
    }, [isRunning]);

    const [ampm, clock] = time.split(" ");

    return (
        <div className="timer-container">
            <h1 className="timer-time">
                <span className="ampm">{ampm}</span>
                <span className="clock">{clock}</span>
            </h1>

            <button 
                className={`btn ${isRunning ? "stop" : "start"}`}
                onClick={() => setIsRunning((prev) => !prev)}
            >
                {isRunning ? "Stop" : "Start"}
            </button>
        </div>
    );
}