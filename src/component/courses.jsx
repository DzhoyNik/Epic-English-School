import React, { useEffect } from "react";
import { motion } from 'framer-motion';

import "../css/sections/courses.css";
import Sidebar from "./sidebar";
import TransitionVariants from "./transitionVariants";


const Courses = () => {
    useEffect(() => {
        document.title = "Курсы | Epic English School"
    }, [])

    return (
        <div className="section">
            <Sidebar />
            <motion.div  variants={TransitionVariants} initial="initial" animate="in" exit="out" className="page">
            <div className="section-body">
            
            </div>
            </motion.div>
        </div>
    )
}

export default Courses;