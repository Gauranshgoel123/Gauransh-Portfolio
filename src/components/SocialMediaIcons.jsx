import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
// import twitter from "../assets/twitter(1).png";
import resume from "../assets/resume-logo.png";

const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/gauranshgoel123/"
          target="_blank"
          rel="noreferrer"
        >
          <img title="View Linkedin Profile" alt="linkedin-link" src={linkedin} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/Gauranshgoel123"
          target="_blank"
          rel="noreferrer"
        >
          <img title="View Github Profile" alt="github-link" src={github} />
        </a>
         {/* <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.twitter.com"
          target="_blank"
          rel="noreferrer"
        >
          <img title="View Twitter Profile" alt="twitter-link" src={twitter} />
        </a> 
         */}
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com/gauranshhh_/"
          target="_blank"
          rel="noreferrer"
        >
          <img title="View Instagram Profile" alt="instagram-link" src={instagram}/>
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://drive.google.com/file/d/1IMmLTHgl9Dkxbr87Rx6YliYZZgu-qxvL/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <img title="View Resume" alt="resume-link" src={resume} />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;