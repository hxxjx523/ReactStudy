import ReactDOM from 'react-dom'
const root = ReactDOM.createRoot(document.getElementById("root")) // 최상위 코드 ex) body

function FirstComponent() {
    return <div>First Component</div>
}

function HelloWorld(){
    return <h1>Hello, World!</h1>
}

root.render(<div>
    <FirstComponent />
    <HelloWorld />
</div>)