import React, { useState, useRef } from "react";
import { PadStart } from "./ReactStopWatch.utils";
import "./ReactStopWatch.css";

const ReactStopWatch = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startStopWatch = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(
      () => setTime((prevTime) => prevTime + 1),
      1000
    );
  };

  const stopStopWatch = () => {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
  };
  const resetStopWatch = () => {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  };

  const hour = PadStart(Math.floor(time / 3600));
  const mintue = PadStart(Math.floor((time - hour * 3600) / 60));
  const seconds = PadStart(time - mintue * 60 - hour * 3600);

  return (
    <div>
      <h1>StopWatch</h1>
      <div className="time">
        <span>{hour}</span>
        <span>:</span>
        <span>{mintue}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        <button onClick={startStopWatch} className="btn">
          Start
        </button>
        <button onClick={stopStopWatch} className="btn">
          Stop
        </button>
        <button onClick={resetStopWatch} className="btn">
          Reset
        </button>
      </div>
    </div>
  );
};

export default ReactStopWatch;
