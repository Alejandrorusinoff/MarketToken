import React from 'react'
import { CompletedQuestionsComponent } from '../components'
import { datos1 } from '../questions/Questions'
import { setAnswer, getAnswer, getPay, getBalancePKM, getBalanceEther} from '../services/requestWeb3'
import { isOwner, convertToMatriz, convertObjectToArray } from '../utils/functions'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../redux/user'

const CompletedQuestionsContainer = () => {
    const user = useSelector(state => state?.user)
    const { owner, account, isCompletedQuestionnaire } = user
    const question = useSelector(state => state?.question)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function sendAnswerAndGetPay(account, question, datos1) {
        await setAnswer(account, convertObjectToArray(convertToMatriz(question, datos1)), true)
        const { state } = await getAnswer(account)
        await getPay(account, owner)
        setTimeout(async() => {
            const PKM = await getBalancePKM(account)
            const ETH = await getBalanceEther(account)
            console.log('res ---> ', PKM)
            dispatch(setUser({...user,  'isCompletedQuestionnaire': state, 'balancePKM': PKM, 'balanceETH': ETH }));
        },1000)
    }

    return(     
        <div>
            {isOwner(owner, account) ? navigate('/') : 
            <CompletedQuestionsComponent 
            account={account} 
            matriz={convertToMatriz(question, datos1)} 
            question={question} 
            datos1={datos1} 
            setAnswer={setAnswer} 
            getAnswer={getAnswer} 
            sendAnswerAndGetPay={sendAnswerAndGetPay}
            getBalancePKM={getBalancePKM}
            /> 
            }
        </div>
    )
}

export default CompletedQuestionsContainer