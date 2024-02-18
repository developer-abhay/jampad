import Hero from "../components/Hero/Hero";
import AboutUs from "../components/AboutUs/AboutUs";
import AboutBanner from "../../public/assets/banner_about.jpg";

const About = () => {
  return (
    <section>
      <Hero cName="hero-mid" img={AboutBanner} title="About" btnClass="hide" />
      <AboutUs />
    </section>
  );
};

export default About;
