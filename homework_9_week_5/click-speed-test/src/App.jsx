import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [finalScore, setFinalScore] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [duration, setDuration] = useState(5);
  const timerRef = useRef(null);
  const counterRef = useRef(0);

  const incrementCounter = () => {
    setCounter((prev) => {
      const updated = prev + 1;
      counterRef.current = updated;
      return updated;
    });
  };

  const startCountdown = () => {
    if (timerRef.current !== null) return;

    setCounter(0);
    counterRef.current = 0;
    setIsStart(true);
    setTimeLeft(duration);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev < 1) {
          clearInterval(timerRef.current);
          timerRef.current = null;
          setIsStart(false);
          setFinalScore(counterRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  function handleInputChange(event) {
    setDuration(event.target.value)
  }
  

  return (
    <div>
      <p>Number of clicks: {counter}</p>
      <p>Timer: {timeLeft}</p>
      <p>Your final score is: {finalScore}</p>
      <button onClick={startCountdown}>Start test</button>
      <button disabled={!isStart} onClick={incrementCounter}>
        Click Me!
      </button>
      <label>Write time for game in a seconds here:</label>
      <input value={duration} onChange={handleInputChange}/>
    </div>
  );
}

export default App;
