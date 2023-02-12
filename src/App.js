import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import CreateBlog from './Components/CreateBlog';
import Detail from './Components/Detail';
import Header from './Components/Header';
import ShowBlog from './Components/ShowBlog';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/create-blog' element={<CreateBlog/>}/>
      <Route path='/show-blog' element={<ShowBlog/>}/>
      <Route path='/Detail' element={<Detail/>}/>
      <Route path='/' element={<CreateBlog/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
