import { div, section } from "framer-motion/client"
import { HERO_CONTENT, HOW_IT_WORKS_CONTENT } from "../constants"

const HowItWorks = () => {
  return (
    <section id="works">
        <div className="max-w-7xl mx-auto px-4 ">
            <div className="text-center mb-12 ">
               <h2 className="text-2xl lg:text-4xl mt-20 tracking-tighter font-semibold">
                {HOW_IT_WORKS_CONTENT.sectionTitle}
               </h2>
               <p className="mt-4 text-neutral-700 max-w-xl mx-auto">
                  {HOW_IT_WORKS_CONTENT.sectionDescription}
               </p>
            </div>

            <div className="grid grid-col-1 md:grid-cols-2 gap-6">
                {HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
                    <div key={index} className="bg-[#01382e] p-6 rounded-xl shadow-lg flex flex-col justify-between">
                       <div>
                           <h3 className="text-xl font-semibold mb-4 text-neutral-50">{step.title}</h3>
                           <p className="text-neutral-200 mb-4">{step.description}</p>
                       </div>
                       <div className="flex justify-center"></div>
                    </div>
                ))}
            </div>

        </div>

    </section>
  )
}

export default HowItWorks