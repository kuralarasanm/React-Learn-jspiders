import { useState } from "react";
import '../styles/AddBooks.css'
import axios from "axios";
const AddBooks = () => {
    let [title, settitle] = useState("")
    let [pagecount, setpagecount] = useState("")
    let [shortDescription, setshortDecription] = useState("")
    let [longDescription, setlongDescription] = useState("")
    let [thumbnailUrl, setthumbnailUrl] = useState("")

    let data = { title, pagecount, shortDescription, longDescription, thumbnailUrl }

    let addbook = (e) => {
        e.preventDefault()

        axios.post('http://localhost:1000/books',data)
        .then((res)=>{
            console.log(res);
            alert("data added successfully")
        })
        .catch((err)=>{
            console.log(err);
        })

            //or to fetch api
        // fetch('http://localhost:1000/books', {
        //     method: "POST",
        //     headers:{"content-type": "application/json"},
        //     body:JSON.stringify(data)
        // })
        // alert("data added sucessfully")
        //or
        // .then(()=>{
        //     alert("data added sucessfully")
        // })
        // .catch(()=>{
        //     alert("failed")
        // })
    }
    return (
        <div className="addbooks">
            <section className="addbooks1">
                <form action="">
                    <div className="addbookstitle">
                        <label htmlFor="">
                            <h2>Tittle</h2>
                            <input value={title} onChange={(e) => { settitle(e.target.value) }} type="text" placeholder="enter the book title" />
                        </label>
                    </div>
                    <div className="addbookspagecount">
                        <label htmlFor="">
                            <h2>pagecount</h2>
                            <input value={pagecount} onChange={(e) => { setpagecount(e.target.value) }} type="number" placeholder="enter the pages" />
                        </label>
                    </div>
                    <div className="addbooksshortdescription">
                        <label htmlFor="">
                            <h2>shortDescription</h2>
                            <input value={shortDescription} onChange={(e) => { setshortDecription(e.target.value) }} type="text" placeholder="enter the short description" />
                        </label>
                    </div>
                    <div className="addbookslongdescription">
                        <label htmlFor="">
                            <h2>Long Description</h2>
                            <textarea value={longDescription} onChange={(e) => { setlongDescription(e.target.value) }} name="" placeholder="enter the long description" id="" cols="30" rows="10"></textarea>
                        </label>
                    </div>
                    <div className="addbooksimage">
                        <label htmlFor="">
                            <h2>Image url</h2>
                            <input value={thumbnailUrl} onChange={(e) => { setthumbnailUrl(e.target.value) }} type="text" placeholder="enter the image link" />
                        </label>
                    </div>
                    <div className="addbooksbutton">
                    <button onClick={addbook}>Add book</button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default AddBooks;