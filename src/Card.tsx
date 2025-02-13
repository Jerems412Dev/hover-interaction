import { motion } from 'motion/react';
import './App.css';
import { useState } from 'react';
import Data from './Data';

function Card(children:Data) {
    const [show, setShow] = useState(false);
    const hover = {
        activeHover: { 
        opacity: 1, 
        scale: 1,
        transition:{ 
            delay: 0.1,
            duration: 0.4,
            opacity: { duration: 0.1 }
        }},
        inactiveHover: { 
        opacity: 0, 
        scale: 0.5,
        transition:{ 
            delay: 0.1,
            duration: 0.7,
            opacity: { duration: 0.8 }
        }}
    };
    
    const textColor = {
        active: { 
        color: 'white',
        transition:{ 
            delay: 0.3,
        }},
        inactive: { 
        color: 'black',
        transition:{ 
            delay: 0.1,
        }}
    };

    const numberColor = {
        active: { 
        color: 'white',
        transition:{ 
            delay: 0.4,
        }},
        inactive: { 
        color: '#99a1af',
        transition:{ 
            delay: 0.1,
        }}
    };

    return(
        <motion.div
            className="relative  bg-gray-200 h-[60vh] rounded-lg cursor-pointer"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            <motion.div
              className="absolute z-20 flex flex-col justify-between items-start w-full h-full rounded-lg p-4"
            >
              <motion.h1
                className="text-xl font-bold text-gray-400 font-mono text-shadow"
                animate={show ? numberColor.active : numberColor.inactive}
              >
                {children.number}
              </motion.h1>
              <div 
                className="flex flex-col w-full gap-y-2"
              >
                <motion.h1
                  className="text-[1.75rem] font-[500] text-gray-500 font-mono text-shadow"
                  animate={show ? textColor.active : textColor.inactive}
                >
                  {children.title}
                </motion.h1>
                <div 
                  className="flex gap-1"
                >
                  <p className="text-sm font-[500] text-black rounded-full bg-white p-2">{children.buttonOne}</p>
                  <p className="text-sm font-[500] text-black rounded-full bg-white p-2">{children.buttonTwo}</p>
                  <p className="text-sm font-[500] text-black rounded-full bg-white p-2">{children.buttonThree}</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="absolute z-10 w-full h-full rounded-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={show ? hover.activeHover : hover.inactiveHover}
              style={{
                backgroundImage: 'url(' + children.linkImg + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >

            </motion.div>
          </motion.div>
    )
}
export default Card