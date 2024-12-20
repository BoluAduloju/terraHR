import { BRAND_LOGOS, HERO_CONTENT } from "../constants"
import { RiArrowRightSLine } from "@remixicon/react"
import { motion } from "framer-motion"

 const containerVariants = {
   hidden: {opacity: 0},
   visible: {opacity: 1, transition: {straggerChildren: 0.2}},
 }
 
 const fadeInUp = {
   hidden: {opacity: 0, y: 20 },
   visible: {opacity: 1, y: 0, transition: {duration: 0.6 }}
 }

  const fadeIn = {
   hidden: {opacity: 0},
   visible: {opacity: 1, y: 0, transition: {duration: 0.6}}
  }

const Hero = () => {
  return (
    <motion.section
    variants = {containerVariants}
    initial="hidden"
    animate="visible"
    
     className="pt-28 lg:pt-36" >
     
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
         <motion.div variants={fadeInUp} className=" hidden md:flex items-center mb-8 border border-neutral-400 rounded-full px-3 py-1.5  text-xs">
             {HERO_CONTENT.badgeText}  <RiArrowRightSLine width={12} height={12} />
         </motion.div>
         <motion.h1 variants={fadeInUp} className=" text-5xl md:text-6xl my-4 font-semibold tracking-tighter">
            {HERO_CONTENT.mainHeading}
         </motion.h1>
         <motion.p variants={fadeInUp}  className="mt-6 text-neutral-700 max-w-xl">
            {HERO_CONTENT.subHeading}
         </motion.p>
         <motion.div variants={fadeInUp} className="mt-6 space-x-4 ">
            <a href="#" className="inline-block bg-[#01382e] font-medium text-white px-6 py-3 hover:bg-[#011a15] ">{HERO_CONTENT.callToAction.primary}</a>
            <a href="#" className="inline-block border font-medium border-neutral-700 text-neutral-900 px-6 py-3  ">{HERO_CONTENT.callToAction.secondary}</a>
         </motion.div>
         <div className="py-10 mt-5">
            <motion.p variants={fadeIn} className="text-gray-400 text-center mb-8 tracking-wider">
               {HERO_CONTENT.trustedByText}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex  justify-center gap-8 ">
               {BRAND_LOGOS.map((logo, index) => (
                  <img key={index} src={logo.src} alt={logo.alt} className="h-8" />
               ))}
            </motion.div>
         </div>
      </div>
    </motion.section>
  )
}

export default Hero