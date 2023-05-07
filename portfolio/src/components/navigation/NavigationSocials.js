import Linkedin from "../../assets/images/socials/linkedin-pink.svg";
import Github from "../../assets/images/socials/github-pink.svg";
const NavigationSocials = () => {
  return (
    <section className="social-media">
      <a
        href="https://www.linkedin.com/in/moses-ojo-427026234/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="linkedin" />
      </a>
      <a
        href="https://github.com/brucewayne2002"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="github" />
      </a>
    </section>
  );
};

export default NavigationSocials;
