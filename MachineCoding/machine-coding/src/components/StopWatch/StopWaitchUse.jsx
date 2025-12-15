import React, { useState, useEffect } from 'react';

/**
 * StopWatch Component
 * A functional stopwatch with start, stop, and reset capabilities
 * Time is displayed in HH:MM:SS:MS format
 */
const StopWatch = () => {
  // State to track elapsed time in milliseconds
  const [time, setTime] = useState(0);

  // State to track whether the stopwatch is currently running
  const [isRunning, setIsRunning] = useState(false);

  /**
   * Effect to handle the interval lifecycle
   * Starts interval when isRunning becomes true
   * Clears interval when isRunning becomes false or component unmounts
   */
  useEffect(() => {
    let intervalId = null;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    // Cleanup function
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  /**
   * Starts the stopwatch
   * Only updates state — interval logic lives in useEffect
   */
  const start = () => {
    setIsRunning(true);
  };

  /**
   * Stops/pauses the stopwatch
   * Interval cleanup is handled automatically by useEffect
   */
  const stop = () => {
    setIsRunning(false);
  };

  /**
   * Resets the stopwatch to 00:00:00:00
   */
  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  /**
   * Formats milliseconds into HH:MM:SS:MS format
   * @param {number} milliseconds - Time in milliseconds
   * @returns {string} Formatted time string (e.g., "01:23:45:67")
   */
  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;

    const ms = Math.floor((milliseconds % 1000) / 10);

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
      2,
      '0'
    )}:${String(seconds).padStart(2, '0')}:${String(ms).padStart(2, '0')}`;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Stopwatch</h1>

      <div style={{ fontSize: '48px', margin: '20px 0' }}>
        {formatTime(time)}
      </div>

      <div>
        <button
          onClick={start}
          disabled={isRunning}
          style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
        >
          Start
        </button>

        <button
          onClick={stop}
          disabled={!isRunning}
          style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
        >
          Stop
        </button>

        <button
          onClick={reset}
          style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;