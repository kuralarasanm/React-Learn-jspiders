import { useState } from "react";
// function Component5(){
//     // a is here hi
//     let [a,seta]=useState("hi")
//     console.log(a);
//     let Change =()=>{
//         seta("hello")
//     }
//     return(
//         <div className="component5">
//             <h1>hello i am component 5</h1>
            
//             <button onClick={Change}>change</button>
//             <h2>{a}</h2>
            
//         </div>
//     )
// }
function Component5(){
    // a is here 1
    let [a,seta]=useState("1")
    console.log(a);
    let Change =()=>{
        seta(++a)
    }
    return(
        <div className="component5">
            <h1>hello i am component 5</h1>
            
            <button onClick={Change}>change</button>
            <h2>{a}</h2>
            
        </div>
    )
}
export default Component5;