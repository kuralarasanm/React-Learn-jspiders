import Files from "./Files";
import Child from "./child";
const Parent = () => {
    return ( 
        <div className="parent">
            <h1>hello everyone i am a parent</h1>
            <Child bit="100000"/>
            <Files/>
        </div>
     );
}
 
export default Parent;