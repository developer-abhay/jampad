import "./Hero.css";
const Hero = ({ cName, img, title, text, url, btnClass, btnText }) => {
  return (
    <div className={cName}>
      <img src={img} alt="HeroImg" />

      <div className="hero-text">
        <h1>{title}</h1>
        <p>{text}</p>
        <a href={url} className={btnClass}>
          {btnText}
        </a>
      </div>
    </div>
  );
};

export default Hero;
