import React, { useState, useRef } from 'react';

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
  
  // Ref to store interval ID - prevents unnecessary re-renders
  const intervalRef = useRef(null);

  /**
   * Starts the stopwatch
   * Creates an interval that increments time by 10ms every 10ms
   */
  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  /**
   * Stops/pauses the stopwatch
   * Clears the interval but preserves the current time
   */
  const stop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  /**
   * Resets the stopwatch to 00:00:00:00
   * Clears the interval and resets time to 0
   */
  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  /**
   * Formats milliseconds into HH:MM:SS:MS format
   * @param {number} milliseconds - Time in milliseconds
   * @returns {string} Formatted time string (e.g., "01:23:45:67")
   */
  const formatTime = (milliseconds) => {
    // Step 1: Convert milliseconds to total seconds
    const totalSeconds = Math.floor(milliseconds / 1000);
    
    // Step 2: Calculate total minutes from seconds
    const totalMinutes = Math.floor(totalSeconds / 60);
    
    // Step 3: Calculate hours from minutes
    const hours = Math.floor(totalMinutes / 60);
    
    // Step 4: Get remaining minutes and seconds using modulo
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;
    
    // Step 5: Get centiseconds (milliseconds / 10)
    const ms = Math.floor((milliseconds % 1000) / 10);

    // return `${hours}:${minutes}:${seconds}:${ms}`

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(ms).padStart(2, '0')}`;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Stopwatch</h1>
      
      {/* Display formatted time */}
      <div style={{ fontSize: '48px', margin: '20px 0' }}>
        {formatTime(time)}
      </div>
      
      {/* Control buttons */}
      <div>
        {/* Start button - disabled when stopwatch is running */}
        <button 
          onClick={start} 
          disabled={isRunning}
          style={{ 
            margin: '5px', 
            padding: '10px 20px', 
            fontSize: '16px',
            cursor: isRunning ? 'not-allowed' : 'pointer'
          }}
        >
          Start
        </button>
        
        {/* Stop button - disabled when stopwatch is not running */}
        <button 
          onClick={stop} 
          disabled={!isRunning}
          style={{ 
            margin: '5px', 
            padding: '10px 20px', 
            fontSize: '16px',
            cursor: !isRunning ? 'not-allowed' : 'pointer'
          }}
        >
          Stop
        </button>
        
        {/* Reset button - always enabled */}
        <button 
          onClick={reset}
          style={{ 
            margin: '5px', 
            padding: '10px 20px', 
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
