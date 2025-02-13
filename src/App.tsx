import { motion } from 'motion/react'
import './App.css'

function App() {

  return (
    <>
      <div
        className="flex flex-col w-full h-screen items-start py-19 px-8 gap-y-6"
      >
        <div className="leading-14 tracking-tighter">
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
        <div 
          className="flex justify-end items-center w-full"
        >

        </div>
        <motion.div 
          className="w-full grid grid-cols-3 grid-rows-1 gap-0.5 p-2 gap-x-5"
          initial={{ opacity: 0, y: 50 }}
              animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                      visualDuration: 0.3,
                  },
              }}
        >
          <motion.div
            className="bg-gray-200 h-[60vh] rounded-lg"
          >
            <motion.div
              className="z-0 flex flex-col justify-between items-start w-full h-full rounded-lg p-4"
            >
              <h1
                className="text-xl font-bold text-gray-500 font-mono"
              >
                01
              </h1>
              <div 
                className="flex flex-col w-full gap-y-2"
              >
                <h1
                  className="text-[1.75rem] font-[500] text-black font-mono"
                >
                  Speed
                </h1>
                <div 
                  className="flex"
                >
                  <p className="text-sm font-[500] text-black rounded-full bg-white p-2">Current Speed</p>
                  <p className="text-sm font-[500] text-black rounded-full bg-white p-2">Averrage Speed</p>
                  <p className="text-sm font-[500] text-black rounded-full bg-white p-2">Max Speed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default App
