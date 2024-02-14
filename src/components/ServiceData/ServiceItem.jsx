const ServiceItem = ({ cName, title, text, img1, img2 }) => {
  return (
    <div className={cName}>
      <div className="service-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="images">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default ServiceItem;
