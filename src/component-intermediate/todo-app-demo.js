import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

//루트 컴포넌트 (이름 뒤가 App으로 끝남)
function TodoApp(props){
    //상태 => 배열 => 배열 안에는 할 일 관련 내용이 포함된 객체가 저장 됨   
    const [ todos, setTodos ] = useState([
        {completed: false, text: "리액트 공부"},
        {completed: true, text: "자바스크립트 공부"}
    ])
    return <div>
        <ul>
            {
                todos.map(item => {
                    return <li>{item.text}</li>  
                })
            }
        </ul>
    </div>
}

root.render( <TodoApp /> )