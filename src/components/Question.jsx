import QuestionTimer from "./QuestionTimer.jsx";
import Answer from "./Answer.jsx";
import { useState } from "react";
import QUESTIONS from '../../Questions.js';
export default function Question({ handleSelectAnswer, handleSkipQuestion, index}){
    const [answer, setAnswer]=useState({
        selectedAnswer:'',
        isCorrect:null,
    })
    
    function handleSelectAnswer1(answer){
        setAnswer({
            selectedAnswer:answer,
            isCorrect:null
        });
        setTimeout(()=>{
            setAnswer({
                selectedAnswer:answer,
                isCorrect:QUESTIONS[index].answers[0]===answer,
            })
            setTimeout(()=>{
                handleSelectAnswer(answer);
            },2000)
        },1000)
    }
    let answerState='';
    if(answer.selectedAnswer && answer.isCorrect!==null){
        answerState=answer.isCorrect?'correct':'wrong'
    }else if(answer.selectedAnswer){
        answerState="answered"
        
    }
    let timer=10000;
    if(answer.selectedAnswer){
        timer=1000;
    }
    if(answer.isCorrect!==null){
        timer=2000
    }
    
    return(
         <div id="question">
                <QuestionTimer 
                key={timer}
                timeout={timer} 
                onTimeOut={answer.selectedAnswer===''?handleSkipQuestion:null}
                mode={answerState}
                />
                <h2>{QUESTIONS[index].text}</h2>
                <Answer answers={QUESTIONS[index].answers}
                selectedAnswer={answer.selectedAnswer} 
                answerState={answerState} 
                handleSelectAnswer={handleSelectAnswer1}
                
                />
            </div>
    );
}