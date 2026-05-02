import { motion } from 'framer-motion';

const PixelTransition = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ width: '100%', height: '100%' }}
        >
            {children}
        </motion.div>
    );
};

export default PixelTransition;
