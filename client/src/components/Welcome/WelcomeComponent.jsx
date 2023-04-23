import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const WelcomeComponent = () => {

    return(     
        <div className="welcomeContainer">
            <div className="question welcome">
                Bienvenido
            </div>
            <div className="rules">
                <p className="question" style={{fontSize: 40}}>Reglas </p>
                <ul>
                    <li className="question" style={{fontSize: 35, textAlign: 'left'}}>El siguiente cuestionario consta de 10 preguntas, con un límite de tiempo de 2 minutos</li>
                    <li className="question" style={{fontSize: 35, textAlign: 'left'}}>Por cada pregunta respondida se le pagará 10 PKMCoint</li>
                    <li className="question" style={{fontSize: 35, textAlign: 'left'}}>Al finalizar el custionario se le pedirá su direccion de wallet para depositarle las criptomonedas</li>
                </ul>
            </div>
            <Link to="/question" style={{textDecoration: 'none'}}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    className="next"
                    >Start  
                </Button>
            </Link>
        </div>
    )
}

export default WelcomeComponent