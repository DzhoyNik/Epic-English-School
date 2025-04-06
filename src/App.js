import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

import './css/style.css'
// import './css/animation.css'

import Auth from './component/auth';
import Main from "./component/main";
import Lesson from "./component/lesson";
import News from "./component/news";
import Students from "./component/students";
import Employees from "./component/employees";
import Settings from "./component/settings";
import Test from "./component/test";

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence initial={false} mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Auth />} />
                <Route path="/main" element={<Main />} />
                <Route path="/lesson" element={<Lesson />} />
                <Route path="/news" element={<News />} />
                <Route path="/students" element={<Students />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </AnimatePresence>
    );
};

const App = () => {

    return (
        <Router>
            <AnimatedRoutes />
        </Router>
    )
}

export default App;