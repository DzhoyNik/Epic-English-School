import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "../../css/sections/courses/create.css"
import Sidebar from "../sidebar";
import TransitionVariants from "../animation/page";

export const Create = () => {
    let [ viewModule, setViewModule ] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
            document.title = "Создание курса | Epic English School"
    }, [])

    const handleClickBack = () => {
        navigate(-1);
    }

    const handleClick = () => {
        setViewModule(!viewModule);
    }

    return (
        <div className="section">
            <Sidebar />
            <motion.div variants={TransitionVariants} initial="initial" animate="in" exit="out">
                <div className="section-body">
                    <div className="courses">
                        <div className="courses-body">
                            <div className="courses-create">
                                <form action="">
                                    <div className="input-section">
                                        <h2>Название курса:</h2>
                                        <textarea name="" id="" placeholder="Введите название курса" required></textarea>
                                    </div>
                                    <div className="input-section">
                                        <h2>Описание курса:</h2>
                                        <textarea name="" id="" placeholder="Введите описание курса"required></textarea>
                                    </div>
                                    <div className="input-section">
                                        <h2>Статус курса:</h2>
                                        <select name="" id="">
                                            <option value="">Активен</option>
                                            <option value="">В разработке</option>
                                        </select>
                                    </div>
                                    <div className="create-modules">
                                        <div className="create-modules-actions">
                                            <h2>Модули</h2>
                                            <div className="create-modules-actions-buttons">
                                                <button type="button" title="Создать модуль" onClick={() => handleClick()}><span className="material-symbols-outlined">add_2</span></button>
                                            </div>
                                        </div>
                                        {!viewModule &&
                                            <div className="create-modules-empty">
                                                <h3>Модулей нет</h3>
                                            </div>
                                        }
                                        {viewModule &&
                                            <div className="create-modules-section">
                                                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, repudiandae ipsa beatae, iusto tempora natus nam soluta vero distinctio, numquam laborum et ratione? Aliquid error neque ex, vel exercitationem omnis!</h2>
                                                <div className="create-modules-section-actions">
                                                    <button type="button" title="Добавить тему"><span className="material-symbols-outlined">add_2</span></button>
                                                    <button type="button" title="Редактировать модуль"><span className="material-symbols-outlined">edit</span></button>
                                                    <button type="button" title="Удалить модуль"><span className="material-symbols-outlined">delete</span></button>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className="create-actions">
                                        <button type="button">Создать</button>
                                        <button type="button">Предпросмотр</button>
                                        <button type="button" onClick={() => handleClickBack()}>Отменить</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}