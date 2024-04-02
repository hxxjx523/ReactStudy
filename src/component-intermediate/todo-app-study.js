import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))


function Test(props){

    const arr = []
    for(let i = 0; i < 10; i++){
        arr.push("test" + ( i + 1 ))
    }
    console.log(arr)

    return <div>
        <ul>
            {
                arr.map((item, index )=>{
                    return <li>{item} {index}</li>
                })
            }
        </ul>
    </div>


}

root.render(<Test />)