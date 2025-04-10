import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import TransitionVariants from "../animation/page";

const NewsSection = () => {
    const navigate = useNavigate();

    return (
        <motion.div variants={TransitionVariants} initial="initial" animate="in" exit="out">
            <div className="news-section">
                <div className="news-img">
                    <img src="https://sun9-78.userapi.com/impg/fXxKSoCSAQXqbvWign-AYVgM8Z-njRAfP-ELWg/vxXHp7eBOn0.jpg?size=807x536&quality=95&sign=e963093265d2617d92218c785a5da429&c_uniq_tag=Ww8MmzO8CkIe9p2u217GoxP3LBVvEB8DsXu8bBS_Vx8&type=album" alt="" />
                </div>
                <div className="news-info">
                    <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim necessitatibus saepe quis quas quia animi, laudantium aut placeat dolorum, magnam sunt, dolor eaque. Praesentium alias accusantium maiores provident quod itaque!</p>
                </div>
                <div className="news-action">
                    <button type="button" title="Просмотреть новость" onClick={() => navigate("./ijwadawo")}><span className="material-symbols-outlined">news</span></button>
                    <button type="button" title="Редактировать"><span className="material-symbols-outlined">edit</span></button>
                    <button type="button" title="Удалить"><span className="material-symbols-outlined">delete</span></button>
                </div>
            </div>
        </motion.div>
    )
}

export default NewsSection;