import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

const PersonProfile = function(props) {
    const { name, age, gender, profile, highlight } = props

    return (
        <div className='person' style={highlight ? { color: 'red' } : null}>
            <h1>Profile</h1>
            <img src={profile} />
            <p>name : {name}</p>
            <p>age : {age}</p>
            <p>gender : {gender}</p>
        </div>
    )
}

// 클래스의 속성에 defaultProps 속성(객체 타입)을 정의하고 기본 전달 props 값을 설정 가능
PersonProfile.defaultProps = {
    name: "Unknown",
    gender: "Unknown",
    age: 0,
    profile: 'https://via.placeholder.com/150'
}