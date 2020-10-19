import React, { useRef, useEffect } from "react";
import { useMachine } from "@xstate/react";
import { createTimerMachine } from "./timerMachine";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

import "./App.css";

function App() {
  const audioEl = useRef(null);
  const timerMachine = createTimerMachine(60, {
    actions: {
      playSound: (ctx, evt) => {
        audioEl.current.play();
      },
      stopSound: (ctx, evt) => {
        audioEl.current.pause();
      },
    },
  });
  useEffect(() => {
    //element.style.setProperty("--my-var", jsVar + 4);
    let urlParams = new URLSearchParams(window.location.search);
    let transparent = urlParams.get("transparent");
    console.log(transparent);
    if (transparent) {
      document.documentElement.style.setProperty(
        "--color-background",
        "transparent"
      );
    }
  }, []);
  const [state, send] = useMachine(timerMachine);
  const { duration, elapsed, interval } = state.context;

  function getTime() {
    const toGo = Math.ceil(duration - elapsed);
    const minutes = Math.floor(Math.abs(toGo) / 60);
    const seconds = String(Math.abs(toGo) % 60);
    let prefix = "";
    if (elapsed > duration) {
      prefix = "-";
    }
    return `${prefix}${minutes}:${seconds.padStart(2, "0")}`;
  }
  return (
    <div
      className="App"
      data-state={state.toStrings().join(" ")}
      style={{
        "--duration": duration,
        "--elapsed": elapsed,
        "--interval": interval,
      }}
    >
      <div className="timerwrapper">
        <svg
          class="timer-circle"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          fill="none"
        >
          <circle r="40" cx="50" cy="50" pathLength="1"></circle>
          <circle
            className="progress"
            r="40"
            cx="50"
            cy="50"
            pathLength="1"
          ></circle>
        </svg>
        <div className="display">
          <div className="state faded">{state.toStrings().slice(-1)}</div>
          <div className="timer">{getTime()}</div>
          <div className="addtime">
            <button onClick={() => send({ type: "ADD_TIME", amount: 1 })}>
              +1
            </button>
            <button onClick={() => send({ type: "ADD_TIME", amount: 10 })}>
              +10
            </button>
            <button
              className="actions"
              disabled={state.matches("running")}
              onClick={() => send("RESET")}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <div id="controls">
        {state.matches("running") && (
          <button onClick={() => send("TOGGLE")}>
            <FaPauseCircle />
          </button>
        )}
        {(state.matches("idle") || state.matches("paused")) && (
          <button onClick={() => send("TOGGLE")}>
            <FaPlayCircle />
          </button>
        )}
      </div>
      <audio ref={audioEl}>
        <source src="Ready_to_Fight_-_David_Fesliyan.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default App;
