import { useState, useEffect } from "react";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
    //useEffect Cleanup Function
    return () => {
      clearInterval(timer);
    };
  }, [onConfirm]);

  //(Problem) Even after selecting no it deletes the place.
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);
    //useEffect Cleanup Function
    return () => {
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={TIMER} />
    </div>
  );
}
