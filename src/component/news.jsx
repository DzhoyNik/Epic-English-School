import React, { useEffect } from "react";
import { motion } from 'framer-motion';

import "../css/sections/news.css";
import Sidebar from "./sidebar";
import NewsSection from "./models/news";
import TransitionVariants from "./transitionVariants";


const News = () => {
    useEffect(() => {
        document.title = "Новости | Epic English School"
    }, [])

    return (
        <div className="section">
            <Sidebar />
            <motion.div  variants={TransitionVariants} initial="initial" animate="in" exit="out" className="page">
            <div className="section-body">
                <div className="news">
                    <div className="news-body">
                        <div className="news-sections news-action">
                        <div className="add">
                                <button type="button" title="Создать новость"><span className="material-symbols-outlined">add_notes</span></button>
                            </div>
                            <div className="search">
                                <button type="button" title="Найти новость"><span className="material-symbols-outlined">search</span></button>
                            </div>
                            <div className="filter">
                                <button type="button" title="Отфильтровать новости"><span className="material-symbols-outlined">filter_alt</span></button>
                            </div>
                        </div>
                        <div className="news-sections news-list">
                            <NewsSection />
                            <NewsSection />
                            <NewsSection />
                            <NewsSection />
                            <NewsSection />
                            <NewsSection />
                            <NewsSection />
                            <NewsSection />
                            <NewsSection />
                            <NewsSection />
                            <NewsSection />
                            <NewsSection />
                            <NewsSection />
                        </div>
                    </div>
                </div>
            </div>
            </motion.div>
        </div>
    )
}

export default News;