import ReactDOM from 'react-dom'
const root = ReactDOM.createRoot(document.getElementById("root")) // 최상위 코드 ex) body

const name = 'Josh Perez'
// 변수 내용 삽입 가능
const element = <h1>Hello, {name}</h1>

// 표현식 내부에서 배열, 객체 참조도 가능하며 수식 사용 및 함수, 메소드 사용도 자유로움
const lst = [100, 200, 300]
const person = {
    name: 'John',
    age: 20
}
function double(value) {
    return value * 2
}

const JSXwithExpressions = (
    <h1>
        {lst[0]}
        &nbsp;{person.name}
        &nbsp;{person.age}
        &nbsp;{2 + 2}
        &nbsp;{person.name.toUpperCase()}
        &nbsp;{person.name.length}
        &nbsp;{double(person.age)}
    </h1>
)

// render 메서드로 요소 그려주기
root.render(<div>
    {element}
    {JSXwithExpressions}
</div>)

//undefined 그냥 뜨는 아이
//null 얘는 직접 대입해야 됨