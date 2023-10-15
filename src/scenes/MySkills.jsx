import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import SkillsImage from "../assets/SkillsImage.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwindcss from "../assets/tailwindcss.png";
import Python from "../assets/python.png";
import mysql from "../assets/mysql.png";
import C from "../assets/C.png";
import c1 from "../assets/c1.png";
import git from "../assets/git.png";
import nodejs from "../assets/nodejs.png";
import bootstrap from "../assets/bootstrap.png";

const MySkills = () => {
    
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    return (
        <section id="skills" className="pt-10 pb-24">

             {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                className="md:w-1/3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
                >
                <p className="font-playfair font-semibold text-4xl mb-5">
                    MY <span className="text-red">SKILLS</span>
                </p>
                <LineGradient width="w-1/3" />
                <p className="mt-10 mb-7">
                    These are the technologies I've worked with: 
                </p>
                </motion.div>

                <div className="mt-16 md:mt-0">
                {isAboveLarge ? (
                    <div
                    className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                    before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                    >
                    <img
                        alt="skills"
                        className="z-10"
                        src={SkillsImage}
                    />
                    </div>
                    ) : (
                        <img alt="skills" className="z-10" src={SkillsImage} />
                    )}
                </div>
            </div>

             

            {/*SKILLS*/}

            <div className="md:flex mt-12 md:justify-between gap-8">
                
                {/*HTML*/}
                <motion.div 
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                >
                    <div className="relative z-0 h-48 ">
                        <div className="z-10">
                            <img title="HTML" src={html} alt="html-logo " style={{ border: '2px solid orange' }}/>
                            <p className=" mt-1 ml-3" style={{ color:'#FFD580' }}>HTML</p>
                        </div>
                    </div>
                </motion.div>

                {/*CSS*/}
                <motion.div 
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay:0.05 ,duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                >
                    <div className="relative z-0 h-48 ">
                        <div className="z-10">
                            <img title="CSS" src={css} alt="css-logo " style={{ border: '2px solid blue' }}/>
                            <p className="mt-1 ml-5" style={{ color: 'lightblue' }}>CSS</p>
                        </div>
                    </div>
                </motion.div>

                {/*JS*/}
                <motion.div 
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.1 , duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                >
                    <div className="relative z-0 h-48 ">
                        <div className="z-10">
                            <img title="JavaScript" src={js} alt="JS-logo " style={{ border: '2px solid yellow' }}/>
                            <p className=" mt-1 ml-1" style={{ color: 'lightyellow' }}>JavaScript</p>
                        </div>
                    </div>
                </motion.div>

                {/*REACTJS*/}
                <motion.div 
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.15 , duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                >
                    <div className="relative z-0 h-48 ">
                        <div className="z-10">
                            <img title="ReactJS" src={react} alt="react-logo " style={{ border: '2px solid aqua' }}/>
                            <p className=" mt-1 ml-3" style={{ color: '#87CEEB' }}>ReactJS</p>
                        </div>
                    </div>
                </motion.div>

                

                {/*MYSQL*/}
                <motion.div 
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2 ,duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                >
                    <div className="relative z-0 h-48 ">
                        <div className="z-10">
                            <img title="MySQL" src={mysql} alt="mysql-logo " style={{ border: '2px solid #ff8c00 ' }}/>
                            <p className="mt-1 ml-3" style={{ color: '#FED8B1' }}>MySQL</p>
                        </div>
                    </div>
                </motion.div>

                {/*PYTHON*/}
                <motion.div 
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                >
                    <div className="relative z-0 h-48 ">
                        <div className="z-10">
                            <img title="Python" src={Python} alt="python-logo " style={{ border: '2px solid yellow' }}/>
                            <p className=" mt-1 ml-3" style={{ color: '#0096FF' }}>Python</p>
                        </div>
                    </div>
                </motion.div>
                
                {/*TAILWIND*/}
                <motion.div 
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3 , duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                >
                    <div className="relative z-0 h-48 ">
                        <div className="z-10">
                            <img title="TailwindCSS" src={tailwindcss} alt="rtailwind-logo " style={{ border: '2px solid aqua' }}/>
                            <p className=" mt-1 ml-1" style={{ color: '#87CEEB' }}>TailwindCSS</p>
                        </div>
                    </div>
                </motion.div>

                {/*C*/}
                <motion.div 
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.35 , duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                >
                    <div className="relative z-0 h-48 ">
                        <div className="z-10">
                            <img title="C" src={C} alt="C-logo " style={{ border: '2px solid #6495ED' }}/>
                            <p className=" mt-1 ml-8 "style={{ color: '#6495ED' }}>C</p>
                        </div>
                    </div>
                </motion.div>

                {/*C++*/}
                <motion.div 
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay:0.4,duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                >
                    <div className="relative z-0 h-48 ">
                        <div className="z-10">
                            <img title="C++" src={c1} alt="c++ - logo " style={{ border: '2px solid #7DF9FF' }}/>
                            <p className=" mt-1 ml-7" style={{ color: '#7DF9FF' }}>C++</p>
                        </div>
                    </div>
                </motion.div>

                {/*GIT*/}
                <motion.div 
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay:0.45,duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                >
                    <div className="relative z-0 h-48 ">
                        <div className="z-10">
                            <img title="git" src={git} alt="git-logo " style={{ border: '2px solid orange' }}/>
                            <p className=" mt-1 ml-7" style={{ color: '#FED8B1' }}>Git</p>
                        </div>
                    </div>
                </motion.div>

                {/*NODEJS*/}
                <motion.div 
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay:0.5,duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                >
                    <div className="relative z-0 h-48 ">
                        <div className="z-10">
                            <img title="nodejs" src={nodejs} alt="nodejs-logo " style={{ border: '2px solid green' }}/>
                            <p className=" mt-1 ml-3" style={{ color: 'green' }}>NodeJS</p>
                        </div>
                    </div>
                </motion.div>

                {/*BOOTSTRAP*/}
                <motion.div 
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay:0.55,duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                >
                    <div className="relative z-0 h-48 ">
                        <div className="z-10">
                            <img title="bootstrap" src={bootstrap} alt="bootstrap-logo " style={{ border: '2px solid blue' }}/>
                            <p className=" mt-1 ml-2" style={{ color: '#7DF9FF' }}>Bootstrap</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>

    );
};

export default MySkills;