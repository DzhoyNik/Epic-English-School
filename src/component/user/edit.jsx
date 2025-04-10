import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "../../css/sections/user/create.css"
import TransitionVariants from "../animation/page";
import Sidebar from "../sidebar";

const UserCreate = (children) => {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Создание пользователя | Epic English School";
    }, [])

    const handleClick = () => {
        navigate(-1);
    }

    return(
        <div className="section">
            <Sidebar />
            <motion.div variants={TransitionVariants} initial="initial" animate="in" exit="out">
                <div className="section-body">
                    <div className="user">
                        <div className="user-create">
                            <form action="">
                                <div className="user-section">
                                    <h2>Основная информация</h2>
                                    <div className="user-first-line">
                                        <div className="user-photo">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="user-input">
                                            <p>Ф.И.О.:</p>
                                            <input type="text" placeholder="Введите ф.и.о. обучающегося" required />
                                        </div>
                                        <div className="user-input">
                                            <p>Дата рождения:</p>
                                            <input type="date" placeholder="Выберите дату рождения" required />
                                        </div>
                                    </div>
                                    <div className="user-input">
                                        <p>Телефон: </p>
                                        <input type="tel" placeholder="Введите телефон обучающегося" required />
                                    </div>
                                    <div className="user-input">
                                        <p>Email: </p>
                                        <input type="email" placeholder="Введите email обучающегося" required />
                                    </div>
                                    <div className="user-input">
                                        <p>Логин: </p>
                                        <input type="text" placeholder="Введите логин обучающегося" required />
                                    </div>
                                    <div className="user-input">
                                        <p>Пароль: </p>
                                        <input type="text" placeholder="Введите пароль обучающегося" required />
                                    </div>
                                </div>
                                <div className="user-section">
                                    <h2>Информация об обучении</h2>
                                    <div className="user-input">
                                        <p>Уровень английского:</p>
                                        <select name="" id="">
                                            <option value="A1">A1</option>
                                            <option value="A2">A2</option>
                                            <option value="B1">B1</option>
                                            <option value="B2">B2</option>
                                            <option value="C1">C1</option>
                                            <option value="C2">C2</option>
                                        </select>
                                    </div>
                                    <div className="user-input">
                                        <p>Цель обучения:</p>
                                        <textarea name="" id="" placeholder="Введите цель обучения обучающегося"></textarea>
                                    </div>
                                    <div className="user-input">
                                        <p>Курс:</p>
                                        <select name="" id="">
                                            <option value="Курс 1">Курс 1</option>
                                            <option value="Курс 2">Курс 2</option>
                                            <option value="Курс 3">Курс 3</option>
                                            <option value="Курс 4">Курс 4</option>
                                            <option value="Курс 5">Курс 5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="user-section user-section-actions">
                                    <button type="button">Сохранить изменения</button>
                                    <button type="button" onClick={() => handleClick()}>Отменить</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default UserCreate;