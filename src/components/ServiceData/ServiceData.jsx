import ServiceImg1 from "/assets/demo.jpeg";
import ServiceImg2 from "/assets/demo.jpeg";
import ServiceImg3 from "/assets/demo.jpeg";
import ServiceImg4 from "/assets/demo.jpeg";
import ServiceItem from "./ServiceItem";
import "./ServiceData.css";

const ServiceData = () => {
  return (
    <div className="service">
      <h1>Our Services</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <ServiceItem
        cName="first-service"
        title="Music Academy"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          repellendus quae obcaecati sequi tempore deleniti, qui similique amet
          minus voluptatum ex dolores praesentium ipsa autem, nobis libero
          quisquam animi porro nemo. Voluptatibus molestiae nemo id temporibus
          voluptas dolore fuga porro non est impedit illo, eius doloribus
          tempore ratione odio omnis mollitia, ut iure similique praesentium
          illum, officia quasi. Nobis quo corrupti fugit ipsum aliquid molestias
          quibusdam cum voluptates. Tenetur soluta alias, error qui neque quos
          sit temporibus quasi vitae a."
        img1={ServiceImg1}
        img2={ServiceImg2}
      />
      <ServiceItem
        cName="Jampad & Studios"
        title="Hello Vello Volcano, Batangas"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          repellendus quae obcaecati sequi tempore deleniti, qui similique amet
          minus voluptatum ex dolores praesentium ipsa autem, nobis libero
          quisquam animi porro nemo. Voluptatibus molestiae nemo id temporibus
          voluptas dolore fuga porro non est impedit illo, eius doloribus
          tempore ratione odio omnis mollitia, ut iure similique praesentium
          illum, officia quasi. Nobis quo corrupti fugit ipsum aliquid molestias
          quibusdam cum voluptates. Tenetur soluta alias, error qui neque quos
          sit temporibus quasi vitae a."
        img1={ServiceImg3}
        img2={ServiceImg4}
      />
    </div>
  );
};

export default ServiceData;
