import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

import "../css/sections/students.css";
import Sidebar from "./sidebar";
import Student from "./models/student";
import TransitionVariants from "./animation/page";

const Students = () => {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Студенты | Epic English School"
    }, [])

    const handleClick = () => {
        navigate("./create");
    }

    const studentItems = [];

    for (let i = 0; i < 15; i++) {
        studentItems.push(<Student />)
    }

    return (
        <div className="section">
            <Sidebar />
            <motion.div  variants={TransitionVariants} initial="initial" animate="in" exit="out" className="page">
            <div className="section-body">
                <div className="students">
                    <div className="students-body">
                        <div className="students-section students-filter">
                            <div className="add">
                                <button type="button" onClick={() => handleClick()}><span className="material-symbols-outlined">person_add</span></button>
                            </div>
                            <div className="search">
                                <button type="button"><span className="material-symbols-outlined">search</span></button>
                            </div>
                            <div className="filter">
                                <button type="button"><span className="material-symbols-outlined">filter_alt</span></button>
                            </div>
                        </div>
                        <div className="students-section students-list">
                            {studentItems}
                        </div>
                    </div>
                </div>
            </div>
            </motion.div>
        </div>
    )
}

export default Students;