const viewModal = {
    initial: {
        y: "-10vh",
        // scale: 0,
        opacity: 0,
    },
    in: {
        y: 0,
        // scale: 1,
        opacity: 1,
        transition: {
            duration: 0.2,
            ease: "easeOut"
        }
    },
    out: {
        y: "-10vh",
        // scale: 0,
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: "easeIn"
        }
    }
}

export default viewModal;