export const navbarVariants = {
    default: {
        backgroundColor: "rgba(255,255,255,0)",
        boxShadow: "0px 3px 5px rgba(0,0,0,0)",
        height: "80px",
    },
    active: {
        backgroundColor: "rgba(255,255,255,1)",
        boxShadow: "0px 3px 5px rgba(0,0,0,0.1)",
        height: "56px",
    },
    slideStart: {
        y: -100,
    },
    slideEnd: {
        y: 0,
        transition: {
            duration: 2,
            type: "spring",
            bounce: 0.3,
        },
    },
};

export const mobileNavbarVariants = {
    hidden: {
        right: "-40%",
        opacity: 0,
    },
    visible: {
        right: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};

export const leftSideVariants = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            duration: 2,
            bounce: 0.3,
            delay: 0.5,
        },
    },
};

export const rightSideVariants = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            duration: 2,
            bounce: 0.3,
            delay: 0.5,
        },
    },
};

export const centerVariants = {
    hidden: {
        opacity: 0,
        y: -50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 2,
            type: "spring",
            bounce: 0.1,
        },
    },
};

export const fadeInVariants = {
    hidden: {
        opacity: 0,
        y: -50,
    },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 2,
            type: "spring",
            bounce: 0.1,
            delay: index * 0.2,
        },
    }),
};
