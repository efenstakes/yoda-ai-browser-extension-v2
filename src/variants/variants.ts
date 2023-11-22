
export const containerVariants = {
    initial: {
        scale: .8,
        opacity: 0,
    },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            when: "beforeChildren",
            delay: .1,
            staggerChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        scale: .8,
    }
}

export const itemVariants = {
    initial: {
        y: 120,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
    },
}
