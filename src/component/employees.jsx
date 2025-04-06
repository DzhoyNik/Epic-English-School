import React, { useEffect } from "react";
import { motion } from 'framer-motion';

import "../css/sections/students.css";
import Sidebar from "./sidebar";
import Empoloyee from "./employee";

const pageVariants = {
    initial: {
        y: "100vh",
        opacity: 0,
    },
    in: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    },
    out: {
        y: "-100vh",
        opacity: 0,
        transition: {
            duration: 0.4,
            ease: "easeIn"
        }
    }
};


const Employees = () => {
    useEffect(() => {
        document.title = "Сотрудники | Epic English School"
    }, [])

    const studentItems = [];

    for (let i = 0; i < 15; i++) {
        studentItems.push(<Empoloyee />)
    }

    return (
        <div className="section">
            <Sidebar />
            <motion.div  variants={pageVariants} initial="initial" animate="in" exit="out" className="page">
            <div className="section-body">
                <div className="students">
                    <div className="students-body">
                        <div className="students-section students-filter">
                            <div className="add">
                                <button type="button"><span className="material-symbols-outlined">person_add</span></button>
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

export default Employees;