import { useState, useRef, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);  

  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);

  function handleStart() {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
        setTime(prev => prev + 10);
    }, 10);
    setIsRunning(true);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
  }

  function handleReset() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
    setTime(0);
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const minutes = String(Math.floor(time / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
  const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, "0");

  const displayTime = `${minutes}:${seconds}:${milliseconds}`;
  
  return (
    <div className="timer-card">
      <div className="timer-header">
        <span className="timer-icon">⏱️</span>
        <div className="timer-display">{displayTime}</div>
      </div>
      <div className="timer-buttons">
        <button 
          className="btn btn-start" 
          onClick={handleStart}
          disabled={isRunning}
        >
          Start
        </button>
        <button 
          className="btn btn-stop" 
          onClick={handleStop}
          disabled={!isRunning}
        >
          Stop
        </button>
      </div>
      <button className="timer-reset" onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Timer;