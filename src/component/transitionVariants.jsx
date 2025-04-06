const TransitionVariants = {
    initial: {
        x: "100vh",
        opacity: 0,
    },
    in: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    },
    out: {
        x: "-100vh",
        opacity: 0,
        transition: {
            duration: 0.4,
            ease: "easeIn"
        }
    }
};

export default TransitionVariants;