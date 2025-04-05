import React, { useEffect } from "react";

import Sidebar from "./sidebar";

const News = () => {
    useEffect(() => {
        document.title = "Новости | Epic English School"
    }, [])

    return (
        <div className="section">
            <Sidebar />
            <div className="section-body">
                
            </div>
        </div>
    )
}

export default News;