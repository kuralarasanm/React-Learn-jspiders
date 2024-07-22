// const Component7 = () => {
//     let fetchdata=async()=>{
//         let res=await fetch('http://localhost:3000/Movies')
//         let data =await res.json()
//         console.log(data);
//     }
//     return ( 
//         <div className="d1">
//         <h1>{data}</h1></div>
//      );
// }
 
// export default Component7;


import { useState} from "react";
import { useEffect} from "react";
const Component7 = () => {
   let [data1,setdata1]=useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(" http://localhost:1000/Movies");
            let data = await response.json()
            setdata1(data)
            console.log(data1);
        }
        fetchData()
    },[])
   return (
       <div className="component">
        {
            data1.map((x)=>{
                return(
                    <div className="d1">

                        <h1>id:{x.id}</h1>
                        <h1>name:{x.name}</h1>
                        <h1>ratings:{x.ratings}</h1>
                        <img src={x.img} alt="" />
                    </div>
                )
            })
        }
       </div>
    )
}
export default Component7;