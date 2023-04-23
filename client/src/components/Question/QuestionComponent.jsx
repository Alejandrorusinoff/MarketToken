import React from 'react'
import { ClockContainer } from '../../containers';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import '../../styles/questionStyles.css'

const QuestionComponent = ({datos, datos1, contador, setContador, next, previus, hadleGender, navigate, res, stateTime, time, resetState}) => {

    return (
        <div className="questionContainer">
            <div className="questionContainer3">
                <div className="clockStyle"><ClockContainer time={time}/></div>
                <div className="questionContainer1">
                <span className="question">Pregunta n°</span><span className="question">{contador+1}</span><span className="question"> de {datos.length}</span>
                </div>
            </div>

            <div className="questionContainer2">
                <div className="questionList" style={{textAlign: 'left'}}>{datos[contador]}</div>
                <div className="ans" style={{textAlign: 'left'}} >
                <FormControl>
                    <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    >
                    {datos1[contador].res.map((r, index) => 
                    <FormControlLabel 
                    style={{color: 'black', }}
                    key={index} 
                    value={r} 
                    disabled={stateTime == 0 && stateTime !== '' ? true: false}
                    onClick={hadleGender} 
                    control={<Radio/>} 
                    label={r}/>)}
                    </RadioGroup>
                </FormControl>
                </div>
            </div>

            <div style={{display: 'flex'}}>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="next"
                onClick={() => previus(contador, setContador, datos)}
                >Previus  
                </Button>
                {contador === datos.length -1 ? 
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="next"
                onClick={() => {
                    navigate('/completedQuestions')
                    /* startAnimation() */
                }}
                >Next
                </Button>
                :  
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="next"
                onClick={() => {
                    next(contador, setContador, datos, res)
                    resetState()
                }}
                >Next  
                </Button>
                }
            </div> 
        </div>
    )
}

export default QuestionComponent
