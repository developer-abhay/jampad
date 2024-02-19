import testimonial1 from "../../../public/assets/testi1.jpg";
import testimonial2 from "../../../public/assets/testi2.jpg";
import testimonial3 from "../../../public/assets/testi3.jpg";
import testimonial4 from "../../../public/assets/testi4.jpg";
import { FaStar } from "react-icons/fa";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials container section">
      <div className="sectionContainer">
        <h2>Top Bands of this month!</h2>

        <div className="testimonialsContainer grid">
          {/* Single testimonial */}
          <div className="singletestimonial">
            <img className="jampadImage" src={testimonial1} alt="" />
            <div className="testimonialDetails">
              <div className="testimonialName">
                <span>The Influence Project</span>
                <div>
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                </div>
              </div>
            </div>
          </div>
          {/* Single testimonial */}
          <div className="singletestimonial">
            <img className="jampadImage" src={testimonial1} alt="" />
            <div className="testimonialDetails">
              <div className="testimonialName">
                <span>Shiv Live</span>
                <div>
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                </div>
              </div>
            </div>
          </div>
          {/* Single testimonial */}
          <div className="singletestimonial">
            <img className="jampadImage" src={testimonial1} alt="" />
            <div className="testimonialDetails">
              <div className="testimonialName">
                <span>Tejasva</span>
                <div>
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                </div>
              </div>
            </div>
          </div>
          {/* Single testimonial */}
          <div className="singletestimonial">
            <img className="jampadImage" src={testimonial1} alt="" />
            <div className="testimonialDetails">
              <div className="testimonialName">
                <span>AIIMS RDA</span>
                <div>
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                  <FaStar className="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
