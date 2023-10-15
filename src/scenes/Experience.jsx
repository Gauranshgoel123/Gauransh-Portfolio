import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Experience = () => {

    return (
        // <section id="testimonials" className="pt-32 pb-16">
        //   {/* HEADING */}
        //   <motion.div
        //     className="md:w-1/3 text-center md:text-left"
        //     initial="hidden"
        //     whileInView="visible"
        //     viewport={{ once: true, amount: 0.5 }}
        //     transition={{ duration: 0.5 }}
        //     variants={{
        //       hidden: { opacity: 0, x: -50 },
        //       visible: { opacity: 1, x: 0 },
        //     }}
        //   >
        //     <p className="font-playfair font-semibold text-4xl mb-5 text-red">
        //       TESTIMONIALS
        //     </p>
        //     <LineGradient width="mx-auto w-2/5" />
        //     <p className="mt-10">
        //       Here's What People are Saying About My Work. Aliquam aliquet integer
        //       ut fames odio in at. At magna ornare dictum lectus.
        //     </p>
        //   </motion.div>
        // </section>

                    <section id="experience" className="pt-32 pb-16">
                    {/* HEADING */}
                    <motion.div
                        className="md:w-2/4 mx-auto text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                    <div>
                        <p className="font-playfair font-semibold text-4xl text-red">
                            EXPERIENCE
                        </p>
                        <div className="flex justify-center mt-5">
                        <LineGradient width="mx-auto w-1/3" />
                        </div>
                    </div>
                    
                    <p className="mt-10 mb-10">
                        Here are some of my Experiences :
                    </p>
                    </motion.div>

                    {/*EXPERIENCES*/}
                    <div className="md:flex md:justify-between gap-8">

                    <motion.div
                        className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
                                  before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-nscc"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                    >
                    
                    <p className="text-center text-xl">
                        <p className="text-center text-semibold ">FEB 2023 - PRESENT</p>
                        Newton School Coding Club is the technical society of BPIT. I am a core member of it and conduct
                        sessions,contests & other technical challenges. For more info  click<a className="text-deep-blue"
                         href="https://www.nsccbpit.tech/"> here</a> 
                    </p>
                    </motion.div>

                    <motion.div
                        className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
                                  before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-codsoft"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2 ,duration: 0.6 }}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                    >
                    
                    <p className="text-center text-xl">
                    <p className="text-center text-semibold ">AUG 2023 - SEPT 2023</p>
                    Internship-Frontend Web developer. I created a portfolio website, a Landing page and a calculator
                     using HTML,CSS,JS.For more info Click
                    <a className="text-center text-blue" href="https://www.linkedin.com/in/gauranshgoel123/">  here</a>
                    </p>
                    </motion.div>
                    


                    
                    </div>

                </section>
        )



}

export default Experience