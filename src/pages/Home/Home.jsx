import video from "/assets/video1.mp4";
import "./Home.css";

import BookingFeature from "../../components/BookingFeature/BookingFeature";
import Gallery from "../../components/Gallery/Gallery";

const Home = () => {
  return (
    <section>
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
    </section>
  );
};

export default Home;
