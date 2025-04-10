import React from "react";
import { motion } from "framer-motion";

import "../../css/modal/style.css";
import viewModal from "../animation/modal";

const Success = () => {
    return (
        <motion.div variants={viewModal} initial="initial" animate="in" exit="out" className="modal">
            <div className="modal-body">
                <span className="material-symbols-outlined">check</span>
                <h3>Новость успешно создана!</h3>
            </div>
        </motion.div>
    )
}

export default Success;