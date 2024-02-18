import testimonial1 from "../../../public/assets/testi1.jpg";
import testimonial2 from "../../../public/assets/testi2.jpg";
import testimonial3 from "../../../public/assets/testi3.jpg";
import testimonial4 from "../../../public/assets/testi4.jpg";
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
              <div className="testimonialPicture">
                <img src={testimonial1} className="testimonialImage" />
              </div>
              <div className="testimonialName">
                <span>09 Studio</span>
                <p> @09studios00</p>
              </div>
            </div>
          </div>
          {/* Single testimonial */}
          <div className="singletestimonial">
            <img className="jampadImage" src={testimonial1} alt="" />
            <div className="testimonialDetails">
              <div className="testimonialPicture">
                <img src={testimonial1} className="testimonialImage" />
              </div>
              <div className="testimonialName">
                <span>09 Studio</span>
                <p> @09studios00</p>
              </div>
            </div>
          </div>
          {/* Single testimonial */}
          <div className="singletestimonial">
            <img className="jampadImage" src={testimonial1} alt="" />
            <div className="testimonialDetails">
              <div className="testimonialPicture">
                <img src={testimonial1} className="testimonialImage" />
              </div>
              <div className="testimonialName">
                <span>09 Studio</span>
                <p> @09studios00</p>
              </div>
            </div>
          </div>
          {/* Single testimonial */}
          <div className="singletestimonial">
            <img className="jampadImage" src={testimonial1} alt="" />
            <div className="testimonialDetails">
              <div className="testimonialPicture">
                <img src={testimonial1} className="testimonialImage" />
              </div>
              <div className="testimonialName">
                <span>09 Studio</span>
                <p> @09studios00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
