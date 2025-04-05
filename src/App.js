import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './css/style.css'

import Auth from './component/auth';
import Main from "./component/main";
import Lesson from "./component/lesson";
import News from "./component/news";
import Students from "./component/students";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Auth />}></Route>
                <Route path="/main" exact element={<Main />}></Route>
                <Route path="/lesson" exact element={<Lesson />}></Route>
                <Route path="/news" exact element={<News />}></Route>
                <Route path="/students" exact element={<Students />}></Route>
            </Routes>
        </Router>
    )
}

export default App;