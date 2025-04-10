import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "../../css/sections/news/create.css"
import TransitionVariants from "../animation/page";
import Sidebar from "../sidebar";
// import Success from "../modal/success";


export const Create = () => {
    const navigate = useNavigate()
    useEffect(() => {
        document.title = "Курсы | Epic English School"
    }, [])

    const handleClickBack = (e) => {
        e.preventDefault();
        navigate(-1);
    }

    return (
        <div className="section">
            {/* <Success /> */}
            <Sidebar />
            <motion.div variants={TransitionVariants} initial="initial" animate="in" exit="out">
                <div className="section-body">
                    <div className="news">
                        <div className="news-body">
                            <form action="">
                                <div className="news-section news-img">
                                    <input type="file" name="" id="" required />
                                    {/* <img src="https://sun9-78.userapi.com/impg/fXxKSoCSAQXqbvWign-AYVgM8Z-njRAfP-ELWg/vxXHp7eBOn0.jpg?size=807x536&quality=95&sign=e963093265d2617d92218c785a5da429&c_uniq_tag=Ww8MmzO8CkIe9p2u217GoxP3LBVvEB8DsXu8bBS_Vx8&type=album" alt="" /> */}
                                </div>
                                <div className="news-section news-info">
                                    <div className="input-section">
                                        <p>Тема новости:</p>
                                        <textarea name="" id="" placeholder="Введите тему новости" required></textarea>
                                    </div>
                                    <div className="input-section">
                                        <p>Текст новости:</p>
                                        <textarea name="" id="" placeholder="Введите текст новости" required></textarea>
                                    </div>
                                    <div className="input-section">
                                        <p>Дата публицаии:</p>
                                        <input type="date" name="" id="" required />
                                    </div>
                                    <div className="input-section">
                                        <p>Время публицаии:</p>
                                        <input type="time" name="" id="" required />
                                    </div>
                                    <div className="input-section">
                                        <button type="button">Создать</button>
                                        <button type="button">Предпросмотр</button>
                                        <button type="button" onClick={handleClickBack}>Отменить</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}