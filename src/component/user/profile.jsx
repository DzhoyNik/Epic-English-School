import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "../../css/sections/user/profile.css"
import TransitionVariants from "../animation/page";
import Sidebar from "../sidebar";

const UserProfile = () => {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Профиль | Epic English School";
    }, [])

    const handleClickBack = () => {
        navigate(-1);
    }

    const handleClick = () => {
        navigate("/students/edit", { replace: true });
    }

    return(
        <div className="section">
            <Sidebar />
            <motion.div variants={TransitionVariants} initial="initial" animate="in" exit="out">
                <div className="section-body">
                    <div className="user">
                        <div className="user-profile">
                            <div className="user-profile-info">
                                <div className="user-profile-general">
                                    <div className="user-section">
                                        <p>Фото</p>
                                    </div>
                                    <div className="user-section">
                                        <p>Ф.И.О.:</p>
                                        <p>Фамилия Имя Отчество</p>
                                    </div>
                                    <div className="user-section">
                                        <p>Роль:</p>
                                        <p>Студент</p>
                                    </div>
                                    <div className="user-section">
                                        <p>Телефон:</p>
                                        <p>+7 (012)345 67-89</p>
                                    </div>
                                    <div className="user-section">
                                        <p>Логин:</p>
                                        <p>example</p>
                                    </div>
                                    <div className="user-section">
                                        <p>Email:</p>
                                        <p>example@gmail.com</p>
                                    </div>
                                </div>
                                <div className="user-section">
                                    <p>Курс:</p>
                                    <p>Курс 1</p>
                                </div>
                                <div className="user-section">
                                    <p>Группа:</p>
                                    <p>Группа 1</p>
                                </div>
                                <div className="user-section">
                                    <p>Дата регистрации:</p>
                                    <p>05.04.2025</p>
                                </div>
                                <div className="user-section">
                                    <p>Последняя активность:</p>
                                    <p>10.04.2025</p>
                                </div>
                                <div className="user-section">
                                    <p>Статус:</p>
                                    <p>Активный</p>
                                </div>
                            </div>
                            <div className="user-profile-actions">
                                <button type="button" onClick={() => handleClick()}>Редактировать</button>
                                <button type="button">Удалить пользователя</button>
                                <button type="button">Сменить пароль</button>
                                <button type="button">Сбросить пароль</button>
                                <button type="button" onClick={() => handleClickBack()}>Отмена</button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default UserProfile;