import React from "react";
import { useNavigate } from "react-router-dom";

const Student = () => {
    const navigate = useNavigate();

    const handleClick = (route) => {
        navigate('./' + route);
    }

    return (
        <div className="student-section">
            <div className="student-personal">
                <div className="student-img">
                    <img src="https://www.servicenow.com/community/s/legacyfs/online/avatars_servicenow/a9a7392fdbbfdb00d58ea345ca96198f.jpg" alt="" />
                </div>
                <div className="student-info">
                    <h2>Фамилия Имя Отчество</h2>
                </div>
            </div>
            <div className="student-another">
                <p>Курс/группа: 1 курс/ТИП-25</p>
                <p>Дата регистрации: 05.04.2025</p>
            </div>
            <div className="student-action">
                <button type="button" onClick={() => handleClick("profile")} title="Посмотреть профиль"><span className="material-symbols-outlined">account_circle</span></button>
                <button type="button" onClick={() => handleClick("edit")} title="Редактировать"><span className="material-symbols-outlined">edit</span></button>
                <button type="button" title="Заблокировать"><span className="material-symbols-outlined">person_off</span></button>
                <button type="button" title="Удалить профиль"><span className="material-symbols-outlined">delete</span></button>
                <button type="button" title="Сбросить пароль"><span className="material-symbols-outlined">sync_lock</span></button>
            </div>
        </div>
    )
}

export default Student;