import React, { useEffect } from "react";

import "../css/sections/news.css";
import Sidebar from "./sidebar";

const News = () => {
    useEffect(() => {
        document.title = "Новости | Epic English School"
    }, [])

    return (
        <div className="section">
            <Sidebar />
            <div className="section-body">
                <div className="news">
                    <div className="news-body">
                        <h1>hduaidh</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;