import { useState, useCallback, useRef } from "react";

import QUESTIONS from '../../Questions.js'
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";
export default function Quiz(){

    const [userAnswers, setUserAnswer]=useState([]);

    const activeQuestionIndex=userAnswers.length;
    const quizIsOver=(activeQuestionIndex==QUESTIONS.length);

    const handleSelectAnswer=useCallback(function handleSelectAnswer(answer){        
        setUserAnswer(prev=>{
            return [...prev, answer];
        })        
    },[])
    const handleSkipQuestion=useCallback(()=>handleSelectAnswer(null),[handleSelectAnswer]);
    if(quizIsOver){
        return(<Summary userAnswers={userAnswers}/>)
    }
   
    
    return(
        <div id="quiz">
            <Question key={activeQuestionIndex} 
            index={activeQuestionIndex}
            handleSelectAnswer={handleSelectAnswer} 
            handleSkipQuestion={handleSkipQuestion}/>
        </div>
    )
}