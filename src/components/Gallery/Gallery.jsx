import img1 from "/assets/demo.jpeg";
import "./Gallery.css";

const Gallery = () => {
  const slidingFunc = () => {
    const track = document.querySelector(".gallery-track");

    window.onmousedown = (e) => {
      track.dataset.mouseDownAt = e.clientX;
    };
    window.onmouseup = () => {
      track.dataset.mouseDownAt = 0;
      track.dataset.prevPercentage = track.dataset.percentage;
    };

    window.onmousemove = (e) => {
      if (track.dataset.mouseDownAt == 0) return;
      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
      console.log(nextPercentage);
      console.log(Math.min(nextPercentage, 0));
      console.log(Math.max(nextPercentage, -100));

      track.dataset.percentage = nextPercentage;

      track.style.transform = `translate(${nextPercentage}%,-50%)`;
    };
  };

  //   if (document.readyState !== "loading") {
  //     console.log("document is already ready, just execute code here");
  //     slidingFunc();
  //   } else {
  //     document.addEventListener("DOMContentLoaded", function () {
  //       console.log("document was not ready, place code here");
  //       slidingFunc();
  //     });
  //   }
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="gallery-track">
        <div className="img-container">
          <img src={img1} />
        </div>
        <div className="img-container">
          <img src={img1} />
        </div>
        <div className="img-container">
          <img src={img1} />
        </div>
        <div className="img-container">
          <img src={img1} />
        </div>
        <div className="img-container">
          <img src={img1} />
        </div>
        <div className="img-container">
          <img src={img1} />
        </div>
        <div className="img-container">
          <img src={img1} />
        </div>
        <div className="img-container">
          <img src={img1} />
        </div>
        <div className="img-container">
          <img src={img1} />
        </div>
        <div className="img-container">
          <img src={img1} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
