import React from 'react'
import Login from '../../components/Login';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import PricingCard from '../../components/PricingCard';

const index: NextPage = () => {
  return (
    <motion.div 
    animate={{ x: [  -75, 0 ], 
    opacity: [ 0, 0.5, 0.7, 0.9, 1 ] }} 
    transition={{ ease: 'easeIn', duration: 0.5 }} 
    className="mt-5 flex mx-[1vw] flex-col justify-center text-center md:mt-20">
       <h1 className="text-4xl text-bold">HealthCare <span className="text-blue-500">Pricing</span></h1>
       <p className="text-gray-500 text-2xl pt-5">Start improving your healthcare by x100 almost instantly by purchasing these amazing deals...</p>
       
      <div className="flex mx-5 justify-center items-center space-y-10 flex-col md:flex-row md:mt-14 md:space-x-10">
        <PricingCard />
      </div>

    </motion.div>
  )
}

export default index;