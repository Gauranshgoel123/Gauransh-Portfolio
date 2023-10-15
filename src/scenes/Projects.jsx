import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project1 from "../assets/project-1.jpeg";
import project2 from '../assets/project-2.jpeg';
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4 .jpg";
import project5 from "../assets/project-5.jpg";
import project6 from "../assets/project-6.png";

const container={
    hidden:{},
    visible:{
        transition: {staggerChildren :0.2}
    }
};

// const projectVariant ={
//     hidden:{ opacity:0 , scale: 0.8},
//     visible:{opacity:1,scale:1}

// };

// const Project = ({ title }) => {
//     const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
//       bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
//     const projectTitle = title.split(" ").join("-").toLowerCase();
  
//     return (
//       <motion.div variants={projectVariant} className="relative">
//         <div className={overlayStyles}>
//           <p className="text-2xl font-playfair">{title}</p>
//           <p className="mt-7">
//             Created a fully responsive restaurant website using HTML,CSS,JS.
//           </p>
//         </div>
//         <img src={projectTitle} alt={projectTitle} />
//       </motion.div>
//     );
//   };

const Projects = () => {
    return (
        <section id="projects" className="pt-48 pb-48">
            {/*HEADINGS*/}

            <div className="md:flex md:justify-between md:gap-16 ">
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
                    <p className="font-playfair font-semibold text-4xl">
                        MY <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                    <LineGradient width="w-1/3" />
                    </div>
                    
                </div>
                
                <p className="mt-10 mb-10">
                    These are some of my projects that I've created: 
                </p>
                </motion.div>
            </div>

             {/*PROJECTS*/}
             <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {/* ROW 1 */}

                    {/*Default*/}
                    <div
                        className="flex justify-center text-center items-center p-10 bg-red
                        max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
                    >
                        BEAUTIFUL USER INTERFACES
                    </div>

                    {/*PROJECT 1*/}
                    <a href="https://github.com/Gauranshgoel123?tab=repositories" target="_blank">
                        <button>
                            <motion.div 
                                className="relative"
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden:{ opacity:0 , scale: 0.8},
                                    visible:{opacity:1,scale:1}
                                        }
                                    }
                            >
                            <div className="absolute h-full w-full opacity-0 hover:opacity-90 
                            transition duration-500 bg-grey z-30 flex flex-col justify-center
                            items-center text-center p-16 text-deep-blue">

                            <p className="text-2xl font-playfair">Project 1</p>
                            <p className="mt-7">
                                Created a fully responsive personal portfolio website using HTML,ReactJS,TailwindCSS and FramerMotion.
                            </p>
                            </div>
                            <img src={project1} alt={project1} />
                            </motion.div>
                        </button>
                    </a>

                    {/*PROJECT 2*/}
                    <a href="https://gauranshgoel123.github.io/mod5-solution/L29/" target="_blank">
                        <button >
                            <motion.div 
                                className="relative"
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden:{ opacity:0 , scale: 0.8},
                                    visible:{opacity:1,scale:1}
                                        }
                                    }
                            >
                            <div className="absolute h-full w-full opacity-0 hover:opacity-90 
                            transition duration-500 bg-grey z-30 flex flex-col justify-center
                            items-center text-center p-16 text-deep-blue">

                            <p className="text-2xl font-playfair">Project 2</p>
                            <p className="mt-7">
                                Created a fully responsive restaurant website using HTML,CSS and JavaScript from Coursera.
                            </p>
                            </div>
                            <img src={project2} alt={project2} />
                            </motion.div>
                        </button>
                    </a>


                    {/* ROW 2 */}

                    {/*PROJECT 3*/}
                    <a href="https://github.com/Gauranshgoel123/2-stage-quiz" target="_blank">
                        <button >
                            <motion.div 
                                className="relative"
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden:{ opacity:0 , scale: 0.8},
                                    visible:{opacity:1,scale:1}
                                        }
                                    }
                            >
                            <div className="absolute h-full w-full opacity-0 hover:opacity-90 
                            transition duration-500 bg-grey z-30 flex flex-col justify-center
                            items-center text-center p-16 text-deep-blue">

                            <p className="text-2xl font-playfair">Project 3</p>
                            <p className="mt-7">
                                Created a simple 2 stage quiz using Python and MySQL interfacing.
                            </p>
                            </div>
                            <img src={project3} alt={project3} />
                            </motion.div>
                        </button>
                    </a>

                    {/*PROJECT 4*/}
                    <a href="https://github.com/Gauranshgoel123/HackOdisha3.0" target="_blank">
                        <button >
                            <motion.div 
                                className="relative"
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden:{ opacity:0 , scale: 0.8},
                                    visible:{opacity:1,scale:1}
                                        }
                                    }
                            >
                            <div className="absolute h-full w-full opacity-0 hover:opacity-90 
                            transition duration-500 bg-grey z-30 flex flex-col justify-center
                            items-center text-center p-16 text-deep-blue">

                            <p className="text-2xl font-playfair">Project 4</p>
                            <p className="mt-7">
                                Created a medical helpline landline page for HackOdhisha3.0 hackathon.
                            </p>
                            </div>
                            <img src={project4} alt={project4} />
                            </motion.div>
                        </button>
                    </a>

                    {/*PROJECT 5*/}
                    <a href="https://github.com/Gauranshgoel123/Gauranshgoel123.github.io" target="_blank">
                        <button >
                            <motion.div 
                                className="relative"
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden:{ opacity:0 , scale: 0.8},
                                    visible:{opacity:1,scale:1}
                                        }
                                    }
                            >
                            <div className="absolute h-full w-full opacity-0 hover:opacity-90 
                            transition duration-500 bg-grey z-30 flex flex-col justify-center
                            items-center text-center p-16 text-deep-blue">

                            <p className="text-2xl font-playfair">Project 5</p>
                            <p className="mt-7">
                                This includes Coursera assignments of making a fully responsive and interactive website.
                            </p>
                            </div>
                            <img src={project5} alt={project5} />
                            </motion.div>
                        </button>
                    </a>

                    {/* ROW 3 */}

                    {/*PROJECT 6*/}
                    <a href="https://www.figma.com/file/vrMw59ChysnT36KIh5HFEp/SIH?type=design&node-id=0%3A1&mode=design&t=9dBs3inCsCO6vTC6-1" target="_blank">
                        <button >
                            <motion.div 
                                className="relative"
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden:{ opacity:0 , scale: 0.8},
                                    visible:{opacity:1,scale:1}
                                        }
                                    }
                            >
                            <div className="absolute h-full w-full opacity-0 hover:opacity-90 
                            transition duration-500 bg-grey z-30 flex flex-col justify-center
                            items-center text-center p-16 text-deep-blue">

                            <p className="text-2xl font-playfair">Project 6</p>
                            <p className="mt-7">
                                SIH hackathon: Created website for Kerela govt that analyses past data and displays air and water quality index according to the user chosen location.
                            </p>
                            </div>
                            <img src={project6} alt={project6} />
                            </motion.div>
                        </button>
                    </a>

                </motion.div>

             </div>

        </section>

       



    )
}

export default Projects;