import { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

function Calculator({num1, num2, op}){

    let result = null;

    if(op === "+"){
        result = num1 + num2;
    }else if(op === "-"){
        result = num1 - num2;
    }else{
        return <div>정확한 연산자를 입력해주세요.</div>
    }

    return (
        <div> {num1} {op} {num2} = {result} </div>
    )

}

root.render(
    <div>
        <Calculator num1={1} num2={2} op="+" />
        <Calculator num1={1} num2={2} op="-" />
    </div>
)