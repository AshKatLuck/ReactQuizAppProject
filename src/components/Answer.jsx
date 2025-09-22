import { useRef } from "react";
export default function Answer({answers, selectedAnswer, answerState, handleSelectAnswer}){
    const shuffledAnswers=useRef();
     if(!shuffledAnswers.current){
        shuffledAnswers.current=[...answers];
        shuffledAnswers.current.sort(()=>Math.random()-0.5);
    }
    return(
        <ul id="answers">
                    {
                        shuffledAnswers.current.map(answer=>
                        {
                            const isSelected=answer===selectedAnswer;
                            let cssClasses='';
                            if(answerState=='answered' && isSelected){
                                cssClasses='selected'
                            }
                            if((answerState=='correct' || answerState==='wrong') && isSelected){
                                cssClasses=answerState;
                            }
                            return(
                                <li className="answer" key={answer}>
                                    <button 
                                        className={cssClasses} 
                                        onClick={()=>{handleSelectAnswer(answer)}}
                                        disabled={answerState!==''}
                                    >
                                        {answer}
                                    </button>
                                </li>
                            )
                        })
                        
                    }
                </ul>
    )
}