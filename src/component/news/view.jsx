import React, { useEffect } from "react";
import { motion } from "framer-motion";

import "../../css/sections/news/view.css"
import TransitionVariants from "../animation/page";
import Sidebar from "../sidebar";

export const View = () => {
    useEffect(() => {
        document.title = "Курсы | Epic English School"
    }, [])

    return (
        <div className="section">
            <Sidebar />
            <motion.div variants={TransitionVariants} initial="initial" animate="in" exit="out" className="page">
                <div className="section-body">
                    <div className="news">
                        <div className="news-body" style={{width: "50vw"}}>
                            <div className="news-actions">
                                <button type="button" title="Редактировать новость"><span className="material-symbols-outlined">edit</span></button>
                                <button type="button" title="Удалить новость"><span className="material-symbols-outlined">delete</span></button>
                                <button type="button" title="Снять с публикации"><span className="material-symbols-outlined">toggle_on</span></button>
                            </div>
                            <div className="news-view">
                                <div className="view-img">
                                    <img src="https://sun9-78.userapi.com/impg/fXxKSoCSAQXqbvWign-AYVgM8Z-njRAfP-ELWg/vxXHp7eBOn0.jpg?size=807x536&quality=95&sign=e963093265d2617d92218c785a5da429&c_uniq_tag=Ww8MmzO8CkIe9p2u217GoxP3LBVvEB8DsXu8bBS_Vx8&type=album" alt="" />
                                </div>
                                <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus eveniet ducimus quidem hic quaerat, sequi minima! Tempora numquam nulla illum, vero, nesciunt eos delectus iusto exercitationem quas, sunt dolore rem!</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur soluta, minima obcaecati enim quibusdam modi repellat mollitia provident, non autem voluptate dolorem, dicta illum in. Repellat blanditiis ullam corrupti! Deleniti! Possimus veritatis, nesciunt deserunt molestiae itaque, quaerat voluptatem quas alias repudiandae eveniet laudantium aperiam, maxime odio! Incidunt excepturi dolor, fugiat odio, dolores iste et vero, amet soluta nisi quod perspiciatis?</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur soluta, minima obcaecati enim quibusdam modi repellat mollitia provident, non autem voluptate dolorem, dicta illum in. Repellat blanditiis ullam corrupti! Deleniti! Possimus veritatis, nesciunt deserunt molestiae itaque, quaerat voluptatem quas alias repudiandae eveniet laudantium aperiam, maxime odio! Incidunt excepturi dolor, fugiat odio, dolores iste et vero, amet soluta nisi quod perspiciatis?</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur soluta, minima obcaecati enim quibusdam modi repellat mollitia provident, non autem voluptate dolorem, dicta illum in. Repellat blanditiis ullam corrupti! Deleniti! Possimus veritatis, nesciunt deserunt molestiae itaque, quaerat voluptatem quas alias repudiandae eveniet laudantium aperiam, maxime odio! Incidunt excepturi dolor, fugiat odio, dolores iste et vero, amet soluta nisi quod perspiciatis?</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur soluta, minima obcaecati enim quibusdam modi repellat mollitia provident, non autem voluptate dolorem, dicta illum in. Repellat blanditiis ullam corrupti! Deleniti! Possimus veritatis, nesciunt deserunt molestiae itaque, quaerat voluptatem quas alias repudiandae eveniet laudantium aperiam, maxime odio! Incidunt excepturi dolor, fugiat odio, dolores iste et vero, amet soluta nisi quod perspiciatis?</p>
                                <div className="input-section">
                                    <div className="input-date">
                                        <span className="material-symbols-outlined">calendar_month</span>
                                        <p>05.04.2025</p>
                                    </div>
                                    <div className="input-time">
                                        <span className="material-symbols-outlined">schedule</span>
                                        <p>00:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}