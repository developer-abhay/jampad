import img1 from "/assets/demo.jpeg";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery">
      <h1>Equipment Gallery</h1>
      <div className="gallery-track">
        <div className="img-container">
          <img src={img1} />
          <h3>Lorem ipsum dolor sit amet.</h3>
        </div>
        <div className="img-container">
          <img src={img1} />
          <h3>Lorem ipsum dolor sit amet.</h3>
        </div>
        <div className="img-container">
          <img src={img1} />
          <h3>Lorem ipsum dolor sit amet.</h3>
        </div>
        <div className="img-container">
          <img src={img1} />
          <h3>Lorem ipsum dolor sit amet.</h3>
        </div>
        <div className="img-container">
          <img src={img1} />
          <h3>Lorem ipsum dolor sit amet.</h3>
        </div>
        <div className="img-container">
          <img src={img1} />
          <h3>Lorem ipsum dolor sit amet.</h3>
        </div>
        <div className="img-container">
          <img src={img1} />
          <h3>Lorem ipsum dolor sit amet.</h3>
        </div>
        <div className="img-container">
          <img src={img1} />
          <h3>Lorem ipsum dolor sit amet.</h3>
        </div>
        <div className="img-container">
          <img src={img1} />
          <h3>Lorem ipsum dolor sit amet.</h3>
        </div>
        <div className="img-container">
          <img src={img1} />
          <h3>Lorem ipsum dolor sit amet.</h3>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
