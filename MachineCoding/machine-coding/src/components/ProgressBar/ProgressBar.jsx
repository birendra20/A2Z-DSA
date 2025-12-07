
import { useEffect, useState } from "react";
import "./Progressbar.css";

const ProgressBar = ({ progress = 0}) => {

    const [progressValue, setProgressValue] = useState(progress);

  useEffect(()=> {
   const interval =  setInterval(()=> {
      setProgressValue((prev)=> {
        if(prev < 100) {
          return prev + 1
        }
        return prev; // Prevent resetting to 0
      })
    },20)

      return () => clearInterval(interval); // Cleanup on unmount

  },[])

  return (
    <>
      <div
        className='outer'
        role="progressbar"
        aria-valuenow={progressValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progress"
        tabIndex={0}
      >
        <span className="percentageText">{progressValue} %</span>
        <div className='inner' style={{ width: `${progressValue}%` }}></div>
      </div>
    </>
  );
};

export default ProgressBar;
