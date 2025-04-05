import React from "react";

import "../css/sidebar.css";
import Logo from "../img/logo.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-body">
                <div className="sidebar-logo">
                    <img src={Logo} alt="" />
                </div>
                <hr />
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
