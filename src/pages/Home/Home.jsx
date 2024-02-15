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
        title="Music For All"
        text="Your favourite jampad just a click away"
      />
      <div className="videoContainer flex container">
        <div className="mainText">
          <h1>Best jamming experience</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            asperiores alias culpa et rem magnam blanditiis accusamus deserunt
            ipsam vitae harum natus pariatur incidunt itaque nemo, non rerum
            repudiandae possimus ea. Modi labore optio at laborum, voluptatem
            magni exercitationem voluptates, sint nulla nesciunt harum
            repellendus culpa omnis quam, est sequi velit nostrum minima quae
            doloribus eveniet enim. Repellendus beatae dignissimos consequatur!
            Sequi illo ipsa quos cumque, magnam distinctio, incidunt totam
            nostrum quaerat quo aut, reprehenderit vitae. Explicabo, facilis
            modi consectetur architecto esse illum at provident. Sapiente maxime
            nemo id excepturi dolor animi, ut, tempore eveniet laudantium quos
            adipisci. Consectetur, sed!
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
