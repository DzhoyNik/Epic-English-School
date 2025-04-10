import React, { useEffect } from "react";
import { motion } from 'framer-motion';

import "../css/sections/courses.css";
import Sidebar from "./sidebar";
import Module from "./courses/module";
import TransitionVariants from "./animation/page";
import { useNavigate } from "react-router-dom";


const Courses = () => {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Курсы | Epic English School"
    }, [])

    return (
        <div className="section">
            <Sidebar />
            <motion.div  variants={TransitionVariants} initial="initial" animate="in" exit="out" className="page">
                <div className="section-body">
                    <div className="courses">
                        <div className="courses-body">
                            <div className="courses-section courses-actions">
                                <div className="add">
                                    <button type="button" onClick={() => navigate("./create")} title="Создать курс"><span className="material-symbols-outlined">add_2</span></button>
                                </div>
                                <div className="search">
                                    <button type="button" title="Найти курс"><span className="material-symbols-outlined">search</span></button>
                                </div>
                                <div className="filter">
                                    <button type="button" title="Отфильтровать курс"><span className="material-symbols-outlined">filter_alt</span></button>
                                </div>
                            </div>
                            <div className="courses-section courses-list">
                                <Module />
                                <Module />
                                <Module />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Courses;