
import React, { useState, useEffect } from "react";

export default function Timecounter() {
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontSize: "24px" }}>
      <p>Countdown Timer:</p>
      <h1>{formatTime(timeLeft)}</h1>
      {timeLeft === 0 && <p>Time's up!</p>}
    </div>
  );
}

