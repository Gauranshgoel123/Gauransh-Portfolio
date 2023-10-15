import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profileImage from "../assets/gg-pic.jpg";
import SocialMediaIcons from "../components/SocialMediaIcons";



const Landing = ({ setSelectedPage }) => {

  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="z-5 w-full max-w-[400px] md:max-w-[600px]"
              src={profileImage}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src={profileImage}
          />
        )}
        </div>

        {/*MAIN SECTION*/}
        <div className="z-30 basis-2/5 mt-12 md:mt-32">
            {/*HEADINGS*/}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0, x:-50},
                visible:{opacity:1, x:0}
            }}
            >
                <p className="text-6xl font-playfair z-10 text-center md:text-start">
                    Gauransh {" "}
                    <span
                    className="xs:relative xs:text-deep-blue z-20 xs:font-semibold
                     xs:before:content-brush before:absolute before:-left-[25px]
                     before:-top-[70px] before:z-[-1]"                  
                    >
                    Goel
                    </span>
                </p>
                
                <p className="mt-10 mb-7 text-center md:text-start text-md">
                I'm currently pursuing a Bachelor's degree in Computer Science and Engineering from
                Bhagwan Parshuram Institute of Technology, affiliated with Guru Gobind Singh Indraprastha University, New Delhi.
                </p>

            </motion.div>

             {/* CALL TO ACTIONS */}
            <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount: 0.5}}
            transition={{delay: 0.2 ,duration:0.5}}
            variants={{
                hidden:{opacity:0, x:-50},
                visible:{opacity:1, x:0}
            }}
            >
              <AnchorLink
              className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
              >
                Contact Me
              </AnchorLink>

              <AnchorLink 
              className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
              >
                <div
                className="bg-deep-blue hover:text-red transition duration-500 w-full h-full
                flex items-center justify-center font-playfair px-10"
                >
                  Let's Talk
                  
                </div>
              </AnchorLink>

            </motion.div>

            <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount: 0.5}}
            transition={{delay: 0.4 ,duration:0.5}}
            variants={{
                hidden:{opacity:0, x:-50},
                visible:{opacity:1, x:0}
            }}
            >
              <SocialMediaIcons />
            </motion.div>






        </div>
      
      </section>
  );
 };

 export default Landing;
