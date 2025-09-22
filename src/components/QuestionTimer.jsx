import { useState, useEffect } from "react";
export default function QuestionTimer({timeout, onTimeOut, mode}){
    const [remainingTime, setRemainingTime]=useState(timeout);
    useEffect(()=>{
        const timer=setTimeout(()=>{
            if(typeof onTimeOut=='function'){
                onTimeOut();
            }        
    },timeout);
    return(()=>clearTimeout(timer))
    },[timeout, onTimeOut])
    

    useEffect(()=>{
        const interval=setInterval(()=>{
        setRemainingTime(prevRemainingTime=>{
            return prevRemainingTime-100;
        })
    },100);
    return(()=>clearInterval(interval))
    },[])
    
    return(<progress id="question-time" className={mode} max={timeout} value={remainingTime}/>);
}