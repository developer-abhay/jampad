import about_img from "../../../public/assets/about1.jpg";
import mission_img from "../../../public/assets/about2.jpg";
import history_img from "../../../public/assets/about3.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Single Item */}
      <div className="about-item">
        <div>
          <h1>About Us</h1>
          <p>
            Nestled within the vibrant confines of Rhythmicstan Music Academy,
            our jam pad stands as a beacon for musical exploration and
            collaboration. Envisioned as a sanctuary for musicians of all
            backgrounds and skill levels, our jam pad offers a dynamic space
            where creativity knows no bounds. From the moment you step through
            our doors, you're greeted by an atmosphere alive with the sounds of
            experimentation and camaraderie. Our meticulously curated collection
            of state-of-the-art instruments and audio equipment ensures that
            every musician has the tools they need to bring their musical vision
            to life. Whether you're a seasoned performer looking to jam with
            like-minded individuals or a newcomer eager to explore the world of
            music, our jam pad provides the perfect setting to connect, create,
            and inspire.
          </p>
        </div>
        <img src={about_img} alt="" />
      </div>

      {/* Single Item */}
      <div className="about-item">
        <div>
          <h1>Our Mission</h1>
          <p>
            At our jam pad, our mission is to cultivate a vibrant community of
            musicians who share a passion for creativity, collaboration, and
            self-expression. We believe that music has the power to transcend
            barriers and unite people from all walks of life, and we are
            committed to providing a space where musicians can come together to
            explore, experiment, and grow. Through our jam sessions, workshops,
            and events, we strive to foster an environment of inclusivity and
            support, where every voice is heard and every idea is valued.
            Whether you're a seasoned pro or a novice enthusiast, our jam pad
            welcomes you with open arms, inviting you to join us on a journey of
            musical discovery and camaraderie.
          </p>
        </div>
        <img src={mission_img} alt="" />
      </div>

      {/* Single Item */}
      <div className="about-item">
        <div>
          <h1>Our History</h1>
          <p>
            Since its inception, our jam pad has been at the heart of the
            Rhythmicstan Music Academy experience, serving as a hub for
            creativity and collaboration. From its humble beginnings as a modest
            rehearsal space to its current incarnation as a bustling center for
            musical innovation, our jam pad has evolved alongside the
            ever-changing landscape of music. Over the years, it has borne
            witness to countless memorable moments, from impromptu jam sessions
            that have stretched long into the night to collaborative projects
            that have blossomed into full-fledged musical endeavors. As part of
            the Rhythmicstan community, our jam pad remains committed to
            upholding the values of creativity, collaboration, and inclusivity
            that have guided us from the very beginning. As we look to the
            future, we are excited to continue our journey, welcoming new faces
            and forging new connections as we strive to make music a truly
            universal language.
          </p>
        </div>
        <div>
          <img src={history_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
