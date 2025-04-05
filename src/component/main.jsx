import React, { useEffect } from "react";

import "../css/sections/statistics.css";
import Sidebar from "./sidebar";

const Main = () => {
    useEffect(() => {
        document.title = "Статистика | Epic English School"
    }, [])

    return (
        <div className="section">
            <Sidebar />
            <div className="section-body">
                <div className="statistics">
                    <div className="statistics-body">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;