import { motion } from 'framer-motion';

const PixelTransition = ({ children }) => {
    const columns = 10;
    const rows = 10;
    
    const blocks = Array.from({ length: columns * rows });

    const containerVariants = {
        initial: { opacity: 1 },
        animate: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.01,
            }
        },
        exit: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.01,
                staggerDirection: -1
            }
        }
    };

    const blockVariants = {
        initial: { scale: 1, opacity: 1 },
        animate: { 
            scale: 0, 
            opacity: 0,
            transition: {
                duration: 0.4,
                ease: [0.23, 1, 0.32, 1]
            }
        },
        exit: { 
            scale: 1, 
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: [0.23, 1, 0.32, 1]
            }
        }
    };

    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={containerVariants}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    display: 'grid',
                    gridTemplateColumns: `repeat(${columns}, 1fr)`,
                    gridTemplateRows: `repeat(${rows}, 1fr)`,
                    zIndex: 99999,
                    pointerEvents: 'none'
                }}
            >
                {blocks.map((_, i) => (
                    <motion.div
                        key={i}
                        variants={blockVariants}
                        style={{
                            background: 'var(--color-void)',
                            border: '0.5px solid rgba(255, 59, 59, 0.05)'
                        }}
                    />
                ))}
            </motion.div>
            {children}
        </div>
    );
};

export default PixelTransition;
