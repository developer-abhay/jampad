import Hero from "../../components/Hero/Hero";
import HomeBanner from "/assets/jampad1.jpg";
import video from "/assets/video1.mp4";
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
        title="Your Journey your Story"
        text="Choose your favourite destination"
        btnText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <div className="home flex container">
        <div className="mainText">
          <h1>Create Ever-lasting jamming experience</h1>
        </div>
        <div className="homeImages flex">
          <div className="videoDiv">
            <video src={video} autoPlay muted loop className="video"></video>
          </div>
        </div>
      </div>
      <BookingFeature />
      <Gallery />
      <Testimonials />
    </section>
  );
};

export default Home;
