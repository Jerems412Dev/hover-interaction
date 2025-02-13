import { motion } from 'motion/react';
import './App.css';
import Card from './Card';
import Data from './Data';

function App() {
  const cards: Data[] = [
    {
      number: '01',
      title: 'Speed',
      buttonOne: 'Current Speed', 
      buttonTwo: 'Average Speed',
      buttonThree: 'Max Speed',
      linkImg: 'https://ucarecdn.com/0c0aa35b-ffb0-403e-8de2-887e2fc71539/-/format/auto/-/preview/3000x3000/-/quality/lighter/V%C3%A9lo-a%C3%A9rodynamique-%C3%A9quipement-vitesse.webp',
    },
    {
      number: '02',
      title: 'Cadence',
      buttonOne: 'Current Cadence',
      buttonTwo: 'Average Cadence',
      buttonThree: 'Target Zone',
      linkImg: 'https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/images/woc/cycling-efficiency-finding-your-unique-pedalling-cadence-4.webp',
    },
    {
      number: '03',
      title: 'Power Output',
      buttonOne: 'Watts',
      buttonTwo: 'Max Power',
      buttonThree: 'Normalized Power',
      linkImg: 'https://hips.hearstapps.com/hmg-prod/images/weight-loss-benefits-1518544373.jpg?crop=0.636xw:1xh;center,top&resize=1200:*',
    }
  ];

  return (
    <>
      <div
        className="flex flex-col w-full h-screen items-start py-19 px-8 gap-y-1.5 font-mono"
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
          className="flex justify-end items-center w-full text-gray-400 p-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z"/></svg>
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
          {cards.map((card: Data) => (
            <Card key={card.number} {...card} />
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default App
