import React from 'react';
import './App.css';
import {Navigate, Routes, Route,} from "react-router-dom";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Hooks from "../pages/Hooks/Hooks";
import Todo from "../pages/Todo/Todo";
import Fetch from "../pages/Fetch/Fetch";
import Axios from "../pages/Axios/Axios";

function App() {

  return (
    <div className="App">
        <Routes>
       <Route path="*" element={<Navigate to="/fetch"/>} key={'fetch'}/>
       <Route path={"/home"} element={<Home/>} key={"home"}/>
       <Route path={"/dashboard"} element={<Dashboard/>} key={"home"}/>
            <Route path={"/hooks"} element={<Hooks/>} key={"home"}/>
            <Route path={"/todo"} element={<Todo/>} key={"home"}/>
            <Route path={"/fetch"} element={<Fetch/>} key={"home"}/>
            <Route path={"/axios"} element={<Axios/>} key={"home"}/>
   </Routes>


    </div>

  );
}

export default App;




