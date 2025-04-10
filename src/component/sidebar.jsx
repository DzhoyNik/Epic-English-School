import React from "react";
import { motion } from "framer-motion";

import "../css/sidebar.css";
import Logo from "../img/logo.png";
import viewLinkBack from "./animation/sidebar";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const specificPage = [
        "/news/create",
        "/news/ijwadawo",
        "/courses/create",
        "/students/create",
        "/students/profile",
        "/students/edit",
        "/employees/create",
        "/employees/profile",
        "/employees/edit",
    ]

    const isSpecificPage = specificPage.includes(location.pathname);

    const handleClickBack = (e) => {
        e.preventDefault();
        navigate(-1);
    }

    return (
        <div className="sidebar">
            <div className="sidebar-body">
                <div className="sidebar-logo">
                    <img src={Logo} alt="" />
                </div>
                <hr />
                {isSpecificPage && (
                    <motion.div variants={viewLinkBack} initial="initial" animate="in" exit="out">
                        <Link to="#" onClick={handleClickBack} className="sidebar-section">
                            <span className="material-symbols-outlined">arrow_back_ios</span>Назад
                        </Link>
                    </motion.div>
                )}
                <NavLink to="/main" className="sidebar-section">
                    <span className="material-symbols-outlined">analytics</span>Статистика
                </NavLink>
                <NavLink to="/lesson" className="sidebar-section">
                    <span className="material-symbols-outlined">school</span>Урок
                </NavLink>
                <NavLink to="/news" className="sidebar-section">
                    <span className="material-symbols-outlined">newspaper</span>Новости
                </NavLink>
                <NavLink to="/courses" className="sidebar-section">
                    <span className="material-symbols-outlined">database</span>Курсы
                </NavLink>
                <NavLink to="/students" className="sidebar-section">
                    <span className="material-symbols-outlined">group</span>Студенты
                </NavLink>
                <NavLink to="/employees" className="sidebar-section">
                    <span className="material-symbols-outlined">badge</span>Преподаватели
                </NavLink>
                <NavLink to="/settings" className="sidebar-section">
                    <span className="material-symbols-outlined">settings</span>Настройки
                </NavLink>
                <NavLink to="/" className="sidebar-section">
                    <span className="material-symbols-outlined">logout</span>Выйти
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar;
