import React from "react";
import { animate, motion } from "framer-motion";



const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"]
    }
}

export default function Strairs() {

    const reverseIndex = (index) =>{
        const totalSteps = 6;
        return totalSteps - index - 1;
    }

    return (
        <React.Fragment>
            {
                [...Array(6)].map((tile, index)=> {
                    return (
                        <motion.div 
                            key={index} 
                            variants={stairAnimation} 
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                                delay: reverseIndex(index)* 0.1,
                            }}
                            className="h-full w-full bg-white relative"
                        />
                )})
            }
        </React.Fragment>
    )
}