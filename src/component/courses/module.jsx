import React from "react";
import Themes from "./themes";

const Module = () => {
    return (
        <div className="courses-module">
            <div className="courses-menu">
                <div className="courses-title">
                    <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae adipisci eveniet facere sit delectus corrupti exercitationem expedita repudiandae tenetur necessitatibus voluptatem perferendis corporis tempora atque itaque aliquid ex, saepe numquam?</h2>
                </div>
                <div className="courses-status">
                    <h3><span>Активен</span></h3>
                </div>
                <div className="courses-actions">
                    <button type="button" title="Добавить тему"><span className="material-symbols-outlined">add_2</span></button>
                    <button type="button" title="Редактировать"><span className="material-symbols-outlined">edit</span></button>
                    <button type="button" title="Удалить"><span className="material-symbols-outlined">delete</span></button>
                    <button type="button" title="Снять с публикации"><span className="material-symbols-outlined">toggle_on</span></button>
                </div>
            </div>
            <Themes />
            <Themes />
            <Themes />
            <Themes />
            <Themes />
            <Themes />
            <Themes />
        </div>
    )
}

export default Module;