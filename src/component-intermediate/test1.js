import React, { useState, useSyncExternalStore } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

const UserProfile = function(props) {

    const [ userName, setUserName ] = useState("아무개")
    const [ userAge, setUserAge ] = useState(19)
    const [ eamilAddress, setEamilAddress ] = useState("email")

    return (
        <div>
            <h1>{userName}</h1>
            <h1>{userAge}</h1>
            <h1>{eamilAddress}</h1>
        </div>
    )
}