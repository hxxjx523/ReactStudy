import ReactDOM from 'react-dom'
const root = ReactDOM.createRoot(document.getElementById("root"))

const user = {
    name: '방윤서',
    age: 13
}

const element = <h3 style={{color: "yellow", backgroundColor:"black"}}>
    안녕하세욤 {user.name}씨 
    당신은 {user.age}세 입니다!</h3>

let myNumber = 2
function isEven(num) { return num % 2 === 0 }

const users = [
    {name: "John", isKorean: false},
    {name: "철수", isKorean: true},
    {name: "영희", isKorean: true},
    {name: "Sally", isKorean: false}
]

const userList = <ul>
        {
            users.map(u => {
                return <li>{(u.isKorean ? "안녕하세요. " : "Welcome. ") + u.name}</li>
            })
        }
</ul>


root.render(<div>
    {element}
    {
        isEven(myNumber) && <h1>짝수는 사용할 수 없습니다.</h1>
    }
    {
        isEven(myNumber) ? <h1>짝수입니다.</h1> : <h1>홀수입니다.</h1>
    }
    {userList}
</div>)