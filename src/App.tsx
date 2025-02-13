import { motion, usePresenceData } from 'motion/react'
import './App.css'

function App() {
  const direction = usePresenceData()

  return (
    <>
      <div
        className="flex flex-col w-full items-start py-12 px-2 gap-y-12"
      >
        <div className="leading-14">
          <motion.div
            className="text-[3rem] overflow-hidden"
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                      visualDuration: 0.3,
                  },
              }}
            >
              Get All the Stats You Need 
            </motion.h1>
          </motion.div>
          <motion.div
            className="text-[3rem] overflow-hidden"
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                      visualDuration: 0.3,
                  },
              }}
            >
              to Make Every Ride Count 
            </motion.h1>
          </motion.div>
        </div>
        <motion.div 
          className="w-full grid grid-cols-3 grid-rows-1 gap-0.5 p-2 bg-amber-200"
          initial={{ opacity: 0, y: 50 }}
              animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                      visualDuration: 0.3,
                  },
              }}
        >
          <motion.div>

          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default App
