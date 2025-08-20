
import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

function CreateBlog() {
   const[users,setUsers]=useState({
    title:"",
    content:"",
    description:"",
    author:""
   });
   const navigate=useNavigate()
   
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/users",{
            title:users.title,
            content:users.content,
            description:users.description,
            author:users.author
        })
        .then(res=>console.log("posted",res.data), navigate("/blogs"))
        .catch(err=>console.error(err))
      setUsers({
         title:"",
    content:"",
    description:"",
    author:""
      })
      
    }
  return (
    <div>
        <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={users.title} onChange={(e)=>setUsers({...users,title:e.target.value})}/> <br />
        <label>Content</label>
         <input type="text" value={users.content} onChange={(e)=>setUsers({...users,content:e.target.value})}/> <br />
        <label>Description</label>
         <input type="text" value={users.description} onChange={(e)=>setUsers({...users,description:e.target.value})}/><br />
        <label>Author</label>
         <input type="text" value={users.author} onChange={(e)=>setUsers({...users,author:e.target.value})}/><br />
         <button type='submit' >submit</button>
         <button onClick={()=>navigate("/blogs")}>Blogs</button>
      </form>
    </div>
  )
}

export default CreateBlog
