import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

function SlotMachine ({s1, s2, s3}){


    // meeeeee
    // let result = null;

    // if(s1 === s2 && s2 === s3){
    //     if(s1 === "7"){
    //         result = <div style={{color:"red"}}>"Congrats!"</div>;
    //     }else{
    //         result = <div>"Congrats!"</div>;
    //     }
    // }else{
    //     result = "";
    // }

    

    // return (
        
    //     <div>
            
    //         {s1} {s2} {s3} <br /> 
    //         {result}
    //         <br />
    //     </div>    
    // )


    let success = false

    if(s1 === s2 & s1 === s3) success = true;
    let highlight = false;
    if(s1 === "7") highlight = true;

    return (
        <div>
            <div>{s1} {s2} {s3}</div>
            {success && <p style={ highlight ? {color:"red"} : null}>Congrats!</p> }
        </div>
    )

}





root.render(
    <div>
        <SlotMachine s1="X" s2="Y" s3="Z" />
        <SlotMachine s1="X" s2="X" s3="X" />
        <SlotMachine s1="7" s2="7" s3="7" />
        // 과일 이모지 : 🍇🍈🍉🍊🍌🍍🍎🍏🍑🍒🍓🍅🍆🌽🍄🌰
        <SlotMachine s1="🍓" s2="🍒" s3="🍍" />
        <SlotMachine s1="🍒" s2="🍒" s3="🍒" />
    </div>
)