import React, { useEffect } from "react";
import { motion } from 'framer-motion';

import "../css/sections/lesson.css";
import Sidebar from "./sidebar";
import TransitionVariants from "./animation/page";


const Lesson = () => {
    useEffect(() => {
        document.title = "Урок | Epic English School"
    }, [])

    return (
        <div className="section">
            <Sidebar />
            <motion.div  variants={TransitionVariants} initial="initial" animate="in" exit="out" className="page">
            <div className="section-body">
                <div className="lesson">
                    <div className="lesson-body">
                        <div className="lesson-section lesson-actions">
                            <button type="button"><span className="material-symbols-outlined">broadcast_on_home</span><p>Начать эфир</p></button>
                            <button type="button"><span className="material-symbols-outlined">person_add</span><p>Добавить студента</p></button>
                            <button type="button"><span className="material-symbols-outlined">person_remove</span><p>Удалить студента</p></button>
                            <button type="button"><span className="material-symbols-outlined">notification_add</span><p>Отправить уведомление</p></button>
                        </div>
                        <div className="lesson-section lesson-info">
                            <div className="lesson-info-section">
                                <h2>Тема урока: Lorem ipsum dolor sit adipisicing elit.</h2>
                            </div>
                            <div className="lesson-info-section">
                                <h2>Дата проведения: 05.04.2025</h2>
                                <h3>Время проведения: 19:00 (UTC+4)</h3>
                            </div>
                            <div className="lesson-info-section">
                                <h3>Описание урока:</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus expedita quis debitis, sequi dolore, quasi non consequuntur labore praesentium rem ab eius ullam rerum laboriosam quas, dolores dicta facere ad.</p>
                            </div>
                            <div className="lesson-info-section lesson-material">
                                <h3>Материалы:</h3>
                                <div className="lesson-list">
                                    <div className="material pptx">
                                        <span className="material-symbols-outlined" id="download">download</span>
                                        <p>Презентация</p>
                                        <span className="material-symbols-outlined">transition_chop</span>
                                    </div>
                                    <div className="material text">
                                        <span className="material-symbols-outlined" id="download">download</span>
                                        <p>Текст</p>
                                        <span className="material-symbols-outlined">description</span>
                                    </div>
                                    <div className="material video">
                                        <span className="material-symbols-outlined" id="download">download</span>
                                        <p>Видео</p>
                                        <span className="material-symbols-outlined">movie</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lesson-section lesson-students">
                            <h2>Список студентов</h2>
                            <hr />
                            <div className="lesson-student">
                                <div className="lesson-student-img">
                                    <img src="https://www.servicenow.com/community/s/legacyfs/online/avatars_servicenow/a9a7392fdbbfdb00d58ea345ca96198f.jpg" alt="" />
                                </div>
                                <div className="lesson-student-info">
                                    <h3>Михалев Антон Александрович</h3>
                                    <p>Группа</p>
                                    <p>Успеваемость</p>
                                </div>
                            </div>
                            <div className="lesson-student">
                                <div className="lesson-student-img">
                                    <img src="https://www.servicenow.com/community/s/legacyfs/online/avatars_servicenow/a9a7392fdbbfdb00d58ea345ca96198f.jpg" alt="" />
                                </div>
                                <div className="lesson-student-info">
                                    <h3>Михалев Антон Александрович</h3>
                                    <p>Группа</p>
                                    <p>Успеваемость</p>
                                </div>
                            </div>
                            <div className="lesson-student">
                                <div className="lesson-student-img">
                                    <img src="https://www.servicenow.com/community/s/legacyfs/online/avatars_servicenow/a9a7392fdbbfdb00d58ea345ca96198f.jpg" alt="" />
                                </div>
                                <div className="lesson-student-info">
                                    <h3>Михалев Антон Александрович</h3>
                                    <p>Группа</p>
                                    <p>Успеваемость</p>
                                </div>
                            </div>
                            <div className="lesson-student">
                                <div className="lesson-student-img">
                                    <img src="https://www.servicenow.com/community/s/legacyfs/online/avatars_servicenow/a9a7392fdbbfdb00d58ea345ca96198f.jpg" alt="" />
                                </div>
                                <div className="lesson-student-info">
                                    <h3>Михалев Антон Александрович</h3>
                                    <p>Группа</p>
                                    <p>Успеваемость</p>
                                </div>
                            </div>
                            <div className="lesson-student">
                                <div className="lesson-student-img">
                                    <img src="https://www.servicenow.com/community/s/legacyfs/online/avatars_servicenow/a9a7392fdbbfdb00d58ea345ca96198f.jpg" alt="" />
                                </div>
                                <div className="lesson-student-info">
                                    <h3>Михалев Антон Александрович</h3>
                                    <p>Группа</p>
                                    <p>Успеваемость</p>
                                </div>
                            </div>
                            <div className="lesson-student">
                                <div className="lesson-student-img">
                                    <img src="https://www.servicenow.com/community/s/legacyfs/online/avatars_servicenow/a9a7392fdbbfdb00d58ea345ca96198f.jpg" alt="" />
                                </div>
                                <div className="lesson-student-info">
                                    <h3>Михалев Антон Александрович</h3>
                                    <p>Группа</p>
                                    <p>Успеваемость</p>
                                </div>
                            </div>
                            <div className="lesson-student">
                                <div className="lesson-student-img">
                                    <img src="https://www.servicenow.com/community/s/legacyfs/online/avatars_servicenow/a9a7392fdbbfdb00d58ea345ca96198f.jpg" alt="" />
                                </div>
                                <div className="lesson-student-info">
                                    <h3>Михалев Антон Александрович</h3>
                                    <p>Группа</p>
                                    <p>Успеваемость</p>
                                </div>
                            </div>
                            <div className="lesson-student">
                                <div className="lesson-student-img">
                                    <img src="https://www.servicenow.com/community/s/legacyfs/online/avatars_servicenow/a9a7392fdbbfdb00d58ea345ca96198f.jpg" alt="" />
                                </div>
                                <div className="lesson-student-info">
                                    <h3>Михалев Антон Александрович</h3>
                                    <p>Группа</p>
                                    <p>Успеваемость</p>
                                </div>
                            </div>
                            <div className="lesson-student">
                                <div className="lesson-student-img">
                                    <img src="https://www.servicenow.com/community/s/legacyfs/online/avatars_servicenow/a9a7392fdbbfdb00d58ea345ca96198f.jpg" alt="" />
                                </div>
                                <div className="lesson-student-info">
                                    <h3>Михалев Антон Александрович</h3>
                                    <p>Группа</p>
                                    <p>Успеваемость</p>
                                </div>
                            </div>
                            <div className="lesson-student">
                                <div className="lesson-student-img">
                                    <img src="https://www.servicenow.com/community/s/legacyfs/online/avatars_servicenow/a9a7392fdbbfdb00d58ea345ca96198f.jpg" alt="" />
                                </div>
                                <div className="lesson-student-info">
                                    <h3>Михалев Антон Александрович</h3>
                                    <p>Группа</p>
                                    <p>Успеваемость</p>
                                </div>
                            </div>
                        </div>
                        <div className="lesson-section lesson-additionaly">
                            <div className="lesson-notes">
                                <h2>Заметки</h2>
                                <textarea name="" id="" placeholder="Введите заметки"></textarea>
                                <button type="button">Сохранить</button>
                            </div>
                            <div className="lesson-separator"></div>
                            <div className="lesson-report">
                                <h2>Отчет о занятии</h2>
                                <textarea name="" id="" placeholder="Введите отчет"></textarea>
                                <button type="button">Сохранить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </motion.div>
        </div>
    )
}

export default Lesson;