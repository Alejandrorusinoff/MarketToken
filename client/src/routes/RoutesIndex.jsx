import React from 'react'
import { Routes, Route, Redirect } from 'react-router-dom'
import { HomeView, WelcomeView, QuestionView, CompletedQuestionsView } from '../views'

const RoutesIndex = () => {
    return (
        <div>
            <Routes>
                {/* <Route index element={<HomeView/>}/> */}
                <Route path="/completedQuestions" element={<CompletedQuestionsView/>}/> 
                <Route path="/question" element={<QuestionView/>}/>
                <Route path="/home" element={<WelcomeView/>}/>
                <Route path="/" element={<HomeView/>} />
            </Routes>
        </div>
    )
}

export default RoutesIndex
