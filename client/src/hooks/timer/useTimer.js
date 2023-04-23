/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {setTimer} from '../../redux/time'

export default function useTimer(sentido, isCountdown = false) {
  const [isRunning, setIsRunning] = React.useState(true);
  const [time, setTime] = React.useState(12000); //12000
  const [value, setValue] = React.useState(120); //120
  const dispatch = useDispatch()
  const timeTick = () => {
    setTime(sentido);
  };


  React.useEffect(() => {
    let intervalID;
    const intValue = parseInt(value, 10);

    if (intValue !== 0 && isCountdown) {
      if (time === 0) setTime(intValue * 100);
    }
    if (isRunning) {
      intervalID = setInterval(() => timeTick(setTime), 10);
    }
    return () => clearInterval(intervalID);
  }, [isRunning]);

  const toggleState = () => {
    setIsRunning(!isRunning);
  };

  const resetState = () => {
    setTime(12000);
    /* setIsRunning(false); */
    setIsRunning(true);
    dispatch(setTimer(''))
  };

  return [time, isRunning, toggleState, resetState, value, setValue, setIsRunning];
}
