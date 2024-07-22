import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/UpdateBooks.css'
const UpdateBooks = () => {
    let [title,settitle]=useState("")
    let [pagecount,setpagecount]=useState("")
    let [shortDescription,setshortDescription]=useState("")
    let [longDescription,setlongDescription]=useState("")
    let [thumbnailUrl,setthumbnailUrl]=useState("")
    let param=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:1000/books/${param.id}`)
        .then((res)=>{
            console.log(res.data);
            // setdata(res.data)
            settitle(res.data.title)
            setpagecount(res.data.pagecount)
            setshortDescription(res.data.shortDescription)
            setlongDescription(res.data.thumbnailUrl)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    let data={title,pagecount,shortDescription,longDescription,thumbnailUrl}

    let updatebooks=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:1000/books/${param.id}`, data)
            .then((res) => {
                console.log(res);
                alert("data updated successfully")
            })
            .catch((err) => {
                console.log(err);
            })

    }
    return ( 
        <div className="updatebooks">
            <section className="updatebooks1">
                <form action="">
                    <div className="updatebookstitle">
                        <label htmlFor="">
                            <h2>Tittle</h2>
                            <input value={title} onChange={(e) => { settitle(e.target.value) }} type="text" placeholder="enter the book title" />
                        </label>
                    </div>
                    <div className="updatebookspagecount">
                        <label htmlFor="">
                            <h2>pagecount</h2>
                            <input value={pagecount} onChange={(e) => { setpagecount(e.target.value) }} type="number" placeholder="enter the pages" />
                        </label>
                    </div>
                    <div className="updatebooksshortdescription">
                        <label htmlFor="">
                            <h2>shortDescription</h2>
                            <input value={shortDescription} onChange={(e) => {setshortDescription(e.target.value) }} type="text" placeholder="enter the short description" />
                        </label>
                    </div>
                    <div className="updatebookslongdescription">
                        <label htmlFor="">
                            <h2>Long Description</h2>
                            <textarea value={longDescription} onChange={(e) => { setlongDescription(e.target.value) }} name="" placeholder="enter the long description" id="" cols="30" rows="10"></textarea>
                        </label>
                    </div>
                    <div className="updatebooksimage">
                        <label htmlFor="">
                            <h2>Image url</h2>
                            <input value={thumbnailUrl} onChange={(e) => { setthumbnailUrl(e.target.value) }} type="text" placeholder="enter the image link" />
                        </label>
                    </div>
                    <div className="updatebooksbutton">
                    <button onClick={updatebooks}>update book</button>
                    </div>
                </form>
            </section>
        </div>
     );
}
 
export default UpdateBooks;