import React, { useRef, useEffect, Fragment } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Animation = ({ children }) => {
    const Com = useRef();
    const control = useAnimation();
    const inView = useInView(Com);

    const variant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.25,
                staggerChildren: 0.25
            }
        }
    }

    useEffect(() => {
        inView ? control.start('visible') : control.stop('hidden')
    }, [inView]);
    return (
        <main ref={Com}>
            <motion.div variants={variant} initial='hidden' animate={control}>
                {children}
            </motion.div>
        </main>
    )
}

export default Animation