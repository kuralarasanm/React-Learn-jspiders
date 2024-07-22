import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  axios  from "axios";
import '../styles/ReadBook.css'
const ReadBook = () => {
        let param=useParams()
        let [data,setdata]=useState("")
        useEffect(()=>{
            axios.get(`http://localhost:1000/books/${param.id}`)
            .then((res)=>{
                console.log(res);
                setdata(res.data)
            })
        },[])
    
    return ( 
        <div className="readbook">
            {/* <h1>readbook</h1> */}
            <h1 id="booktitle">{data.title}</h1>
            <img src={data.thumbnailUrl} alt="" id="bookimg" />
            <h3 id="bookdescription"><b>longDescription:</b>{data.longDescription}</h3>
            <p id="pagecount">pageCount:{data.pageCount}</p>
        </div>
     );
}
 
export default ReadBook;