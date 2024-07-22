import { useEffect,useState } from "react"

import '../styles/ViewList.css'

import axios from 'axios'
import { useNavigate } from "react-router-dom"
const ViewList = () => {
    let [data,setdata]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:1000/books')
    .then((res)=>{
        console.log(res.data);
        setdata(res.data)
    })
    .catch((rej)=>{
        console.log(rej);
    })
    },[data
    ])

    // useEffect(()=>{
    //     let fetchData =async()=>{
    //         let response =await fetch("http://localhost:1000/books")
    //         let result =await response.json()
    //         setdata(result)
    //     }
    //     fetchData()
    // },[data])
    let deletedata =(id)=>{
        axios.delete(`http://localhost:1000/books/${id}`)
        alert('data deleted')

        // fetch(`http://localhost:1000/books/${id}`,{
        //     method:"DELETE"
        // })
    }
    let navigate=useNavigate()
    let readdata=(id)=>{
        navigate(`/adminhome/viewlist/${id}`)
    }
    let editbook=(id)=>{
        navigate(`/adminhome/updatebooks/${id}`)
    }
    return ( 
        <div className="viewlist">
            
            {data.map((x)=>{
                return(
                    <div className="viewitems">
                        <div className="bookimg">
                        <img src={x.thumbnailUrl} alt="" />
                        </div>
                        <div className="bookdescription">
                        <h1>{x.title}</h1>
                        <p>no of pages: <b>{x.pagecount}</b></p>
                        <p><b>shortDescription :</b>{x.shortDescription}</p>
                        <button onClick={()=>{deletedata(x.id)}}>Delete</button>

                        <button onClick={()=>{readdata(x.id)}}>read more</button>
                        <button onClick={()=>{editbook(x.id)}}>update books</button>
                        </div>
                        
                    </div>
                )
            })}
        </div>
     );
}
 
export default ViewList;