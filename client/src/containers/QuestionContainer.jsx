import React, { useEffect, useState } from 'react'
import { datos, datos1 } from '../questions/Questions'
import { useSelector, useDispatch } from 'react-redux'
import { setTimer } from '../redux/time';
import { useNavigate } from 'react-router-dom'
import { setQuestion } from '../redux/question'
import { next, previus, isOwner, setLengthAnswers } from '../utils/functions'
import useTimer from '../hooks/timer/useTimer';
import { QuestionComponent } from '../components'

const QuestionContainer = () => {
  const [contador, setContador] = useState(0)
  const [rn, setRn] = useState(setLengthAnswers(datos))
  const { owner, account } = useSelector(state => state?.user)
  const res = useSelector(state => state.question)
  const stateTime = useSelector(state => state.time)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const sentido = (time) => time - 1;
  const [time, isRunning, toggleState, resetState, value, setValue, setIsRunning] = useTimer(sentido, true);

  function hadleGender(e) {
    let value = e.target.value
    let ri = rn[contador]
    dispatch(setQuestion({...res ,[ri]: value}))
  } 

  useEffect(() => {
    if (time === 0) {
      resetState(); // detiene el temporizador
      setIsRunning(false)
      dispatch(setTimer(time)) 
    }
  }, [time]);

  return(     
    <div>
      {isOwner(owner, account) ? navigate('/') : 
        <QuestionComponent 
          datos={datos} 
          datos1={datos1} 
          contador={contador} 
          setContador={setContador} 
          next={next} 
          previus={previus}  
          hadleGender={hadleGender} 
          navigate={navigate} 
          stateTime={stateTime} 
          time={time} 
          resetState={resetState}/> 
        }
    </div>
  )
}

export default QuestionContainer