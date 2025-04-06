import React, { useEffect } from "react";
import { motion } from 'framer-motion';

import "../css/sections/news.css";
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


const News = () => {
    useEffect(() => {
        document.title = "Новости | Epic English School"
    }, [])

    return (
        <div className="section">
            <Sidebar />
            <motion.div  variants={pageVariants} initial="initial" animate="in" exit="out" className="page">
            <div className="section-body">
                <div className="news">
                    <div className="news-body">
                        <h1>hduaidh</h1>
                    </div>
                </div>
            </div>
            </motion.div>
        </div>
    )
}

export default News;