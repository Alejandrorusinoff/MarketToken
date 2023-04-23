import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import '../../styles/questionStyles.css'

const CompletedQuestionsComponent = ({account, matriz, question, sendAnswerAndGetPay, datos1 }) => {

    return (
        <div className="containerCompletedQuestion">
            <span className="question congratulation">
                Felicitaciones has completado todas las preguntas
            </span>
            <div>
                {matriz.map((completed, index) => <div className={index % 2 ? "questionList2": 'questionList1'} key={index}>{completed}</div>)}
            </div>
            <Link to='/' style={{textDecoration: 'none'}}>
            <Button
                /* style={{whiteSpace: 'nowrap'}} */
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="next"
                onClick={() => sendAnswerAndGetPay(account, question, datos1)}
            >Finish and receive PKMCoin
            </Button>
            </Link>
        </div>
    )
}

export default CompletedQuestionsComponent
