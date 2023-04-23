import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import '../styles/questionStyles.css'

const NotAuthorized = () => {
  const questionCompletedState = useSelector(state => state.user.questionCompletedState)

  return (
    <div className="questionContainer">
      {questionCompletedState ? 
      <h1 className="notAuthorized">Para ingresar a este sitio debe estar <Link to='/register'>registrado</Link></h1>
      :
      <h1 className="notAuthorized">Usted ya realizó la encuesta</h1> 
      }
    </div>
  );
}

export default NotAuthorized