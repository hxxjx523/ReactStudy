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

    //Q handleTodoAdd 라는 함수 정의, 그 함수에서는 전달받은 todo 객체를 todos에 추가하는 역할을 함
    const handleTodoAdd = (todo) => setTodos(todos.concat(todo))

    const handleTodoRemove = index => setTodos(todos => todos.filter((_, todoIndex) => index !== todoIndex ))

    const handleTodostatusToggle = index => setTodos(
        todos.map((todo, todoIndex) => { 
            if(index === todoIndex){
                return { ...todo, completed: !todo.completed}
            } 
            return todo;
        }
    ))

    return <div>
        <TodoList todos={todos} handleTodoRemove={handleTodoRemove} handleTodostatusToggle={handleTodostatusToggle}/>
        <TodoAdder handleTodoAdd={handleTodoAdd}/>
        
    </div>
}

function TodoList({todos, handleTodoRemove, handleTodostatusToggle}){

    return <div>
        <ul>
        {
            todos.map((todo, index) => {
                return <TodoItem index={index} todo={todo} handleTodoRemove={handleTodoRemove} handleTodostatusToggle={handleTodostatusToggle}/> 
            })
        }
        </ul> 
    </div>

}

function TodoItem({todo, index, handleTodoRemove, handleTodostatusToggle={handleTodostatusToggle}}){

    return <li>
        <span onClick={() => handleTodostatusToggle(index)} style={todo.completed ? {textDecoration: "line-through"} : null}>{todo.text}</span> <button onClick={() => handleTodoRemove(index)}>❌</button>

    </li>

}

function TodoAdder({handleTodoAdd}){

    const [input, setInput] = useState("")
    const handleChange = (e) => setInput(e.target.value)

    return <div>
        <input type='text' placeholder='할 일을 적으세요' value={input} onChange={handleChange} /> 
        <button onClick={() => {
                handleTodoAdd({text: input, completed: false})
                setInput("")
            }}>추가</button>
    </div>

}

root.render( <TodoApp /> )