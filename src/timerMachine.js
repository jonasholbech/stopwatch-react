import { createMachine, assign } from "xstate";

const ticker = (ctx) => (cb) => {
  const interval = setInterval(() => {
    cb("TICK");
  }, ctx.interval * 1000);
  return () => clearInterval(interval);
};

const timerExpired = (ctx) => {
  console.log("chec OT");
  return ctx.elapsed >= ctx.duration;
};
const deadlineApproaching = (ctx) => {
  return ctx.duration - 10 <= ctx.elapsed;
};
// https://xstate.js.org/viz/?gist=78fef4bd3ae520709ceaee62c0dd59cd
export const createTimerMachine = (duration, options) => {
  return createMachine(
    {
      id: "timer",
      initial: "idle",
      context: {
        duration,
        elapsed: 0,
        interval: 0.1,
      },
      on: {
        RESET: {
          target: ".idle",
        },
        ADD_TIME: {
          actions: assign({
            duration: (ctx, evt) => {
              console.log(evt);
              return ctx.duration + evt.amount * 60;
            },
          }),
        },
      },
      states: {
        idle: {
          entry: assign({
            duration,
            elapsed: 0,
          }),
          on: {
            TOGGLE: "running",
            RESET: undefined,
          },
        },
        running: {
          invoke: {
            id: "ticker", // only used for viz
            src: ticker,
          },
          initial: "normal",
          states: {
            normal: {
              on: {
                "": [
                  {
                    target: "deadline_approaching",
                    cond: deadlineApproaching,
                  },
                ],
                RESET: undefined,
              },
            },
            overtime: {
              entry: "playSound",
            },
            deadline_approaching: {
              on: {
                "": {
                  target: "overtime",
                  cond: timerExpired,
                },
              },
            },
          },
          on: {
            TICK: {
              actions: assign({
                elapsed: (ctx) => ctx.elapsed + ctx.interval,
              }),
            },
            TOGGLE: "paused",
          },
        },
        paused: {
          entry: "stopSound",
          on: { TOGGLE: "running" },
        },
      },
    },
    options
  );
};
