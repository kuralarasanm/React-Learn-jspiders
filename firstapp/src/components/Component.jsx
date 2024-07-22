import { useRef } from "react";

const Component = () => {
    let data=useRef()
    let name=useRef()
    let ipl= ()=>{
        console.log(data.current.textContent);
        data.current.textContent ="cup win csk "

        console.log(name.current.value);
    }
    return ( 
        <div className="component">
            <h1>component- useRef</h1>
            <input ref={name} type="text" />
            <h1 ref={data}>csk</h1>
            <button onClick={ipl}>read</button>
        </div>
     );
}
 
export default Component;