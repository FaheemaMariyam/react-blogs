import React from 'react'
import './App.css'
import CreateBlog from './components/CreateBlog'
import Blogs from './components/Blogs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogsDetails from './components/BlogsDetails'
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<CreateBlog/>}/>
    <Route path='/blogs' element={<Blogs/>}/>
    <Route path={`/blogs-details/:id`} element={<BlogsDetails/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
