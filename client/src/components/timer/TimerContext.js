import React, { useReducer, createContext } from "react";
import timerReducer from "./timerReducer"

export const TimerContext = createContext();

export const TimerContextProvider = props => {
  const isActive = {
    active: false,
    minutes: 10,
    seconds: 0,
    isFinished: false
  };
  const [timerAttributes, dispatch] = useReducer(timerReducer, isActive)

   return <TimerContext.Provider value={{ timerAttributes, dispatch }}>{props.children}</TimerContext.Provider>;


}

export default TimerContextProvider;