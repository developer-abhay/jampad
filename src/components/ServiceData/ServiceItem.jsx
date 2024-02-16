const ServiceItem = ({ cName, title, text, img1, img2, url }) => {
  return (
    <div className={cName}>
      <div className="service-text">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <button className="btn">
          <a href={url} target="_blank">
            More Info
          </a>
        </button>
      </div>
      <div className="images">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default ServiceItem;
