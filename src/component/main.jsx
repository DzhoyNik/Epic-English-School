import React, { useEffect } from "react";
import { motion } from 'framer-motion';
import ChartCourses from "./chart/chartCourses";

import "../css/sections/statistics.css";
import Sidebar from "./sidebar";

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

const Main = () => {
    useEffect(() => {
        document.title = "Статистика | Epic English School"
    }, [])

    return (
        <div className="section">
            <Sidebar />
            <motion.div  variants={pageVariants} initial="initial" animate="in" exit="out" className="page">
            <div className="section-body">
                <div className="statistics">
                    <div className="statistics-body">
                        <div className="statistics-sectoin statistics-general">
                            <h2>Общая статистика:</h2>
                            <div className="statistics-list">
                                <div className="general-section">
                                    <h2>Студенты</h2>
                                    <p>Всего: 2519</p>
                                    <p>За сегодня пришло: 521</p>
                                </div>
                                <div className="general-section">
                                    <h2>Курсы</h2>
                                    <p>Всего: 12</p>
                                    <p>Активны: 8</p>
                                </div>
                                <div className="general-section">
                                    <h2>Преподаватели</h2>
                                    <p>Всего: 19</p>
                                </div>
                                <div className="general-section">
                                    <h2>Финансы</h2>
                                    <p>За месяц: 175 000 руб.</p>
                                    <p>Всего: 500 000 руб.</p>
                                </div>
                            </div>
                        </div>
                        <div className="statistics-sectoin statistics-courses">
                            <h2>Статистика по курсам:</h2>
                            <ChartCourses />
                        </div>
                        <div className="statistics-sectoin statistics-teachers">
                            <h2>Статистика по преподавателям:</h2>
                            <ChartCourses />
                        </div>
                        <div className="statistics-sectoin statistics-finance">
                            <h2>Финансовая статистика:</h2>
                            <ChartCourses />
                        </div>
                    </div>
                </div>
            </div>
            </motion.div>
        </div>
    )
}

export default Main;