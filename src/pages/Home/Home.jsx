import Hero from "../../components/Hero/Hero";
import HomeBanner from "../../../public/assets/banner_home.jpg";
import video from "/assets/video.mp4";
import "./Home.css";

import BookingFeature from "../../components/BookingFeature/BookingFeature";
import Gallery from "../../components/Gallery/Gallery";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <section>
      <Hero
        cName="hero"
        img={HomeBanner}
        title="Music For All"
        text="Your favourite jampad just a click away"
      />
      <div className="videoContainer flex container">
        <div className="mainText">
          <h1>Best Jamming experience </h1>
          <p>
            Immerse yourself in the electrifying energy of live music and
            collaborative creativity at Rhythmicstan Jampad. Our jam sessions
            are more than just music — they're an experience. Step into our
            vibrant space, where musicians come together to unleash their
            passion and talent, weaving melodies and rhythms into the fabric of
            the moment. Whether you're a seasoned pro or picking up an
            instrument for the first time, our jam pad is a haven for
            exploration and expression. From the pulsating beat of the drums to
            the soaring melodies of the guitars, every note resonates with the
            spirit of collaboration and camaraderie. Join us for a jam session
            and discover the magic of making music together.
          </p>
        </div>

        <div className="videoDiv">
          <video src={video} autoPlay muted loop className="video"></video>
        </div>
      </div>
      <Gallery />
      <BookingFeature />
      <Testimonials />
    </section>
  );
};

export default Home;
