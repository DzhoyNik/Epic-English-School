import React from "react";

const Themes = () => {
    return (
        <div className="courses-theme">
            <div className="courses-number">
                <h2>1.</h2>
            </div>
            <div className="courses-title">
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta laudantium commodi, quod non rem maiores eos repellat?</h2>
            </div>
            <div className="courses-description">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse voluptas, nisi corporis rem sapiente exercitationem eius assumenda nulla vitae perspiciatis error in officia incidunt fugit doloribus aliquid, quis dicta consequuntur. Lorem ipsum dolor sit amet</p>
            </div>
            <div className="courses-actions">
                <button type="button"><span className="material-symbols-outlined">edit</span></button>
                <button type="button"><span className="material-symbols-outlined">delete</span></button>
                <button type="button"><span className="material-symbols-outlined">toggle_on</span></button>
            </div>
        </div>
    )
}

export default Themes;