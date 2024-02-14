import Img3 from "/assets/demo.jpeg";
import testimonialImg from "/assets/demo.jpeg";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials container section">
      <div className="sectionContainer">
        <h2>Top Bands of this month!</h2>

        <div className="testimonialsContainer grid">
          {/* Single testimonial */}
          <div className="singletestimonial">
            <img className="jampadImage" src={Img3} alt="" />
            <div className="testimonialDetails">
              <div className="testimonialPicture">
                <img src={testimonialImg} className="testimonialImage" />
              </div>
              <div className="testimonialName">
                <span>09 Studio</span>
                <p> @09studios00</p>
              </div>
            </div>
          </div>
          {/* Single testimonial */}
          <div className="singletestimonial">
            <img className="jampadImage" src={Img3} alt="" />
            <div className="testimonialDetails">
              <div className="testimonialPicture">
                <img src={testimonialImg} className="testimonialImage" />
              </div>
              <div className="testimonialName">
                <span>09 Studio</span>
                <p> @09studios00</p>
              </div>
            </div>
          </div>
          {/* Single testimonial */}
          <div className="singletestimonial">
            <img className="jampadImage" src={Img3} alt="" />
            <div className="testimonialDetails">
              <div className="testimonialPicture">
                <img src={testimonialImg} className="testimonialImage" />
              </div>
              <div className="testimonialName">
                <span>09 Studio</span>
                <p> @09studios00</p>
              </div>
            </div>
          </div>
          {/* Single testimonial */}
          <div className="singletestimonial">
            <img className="jampadImage" src={Img3} alt="" />
            <div className="testimonialDetails">
              <div className="testimonialPicture">
                <img src={testimonialImg} className="testimonialImage" />
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
