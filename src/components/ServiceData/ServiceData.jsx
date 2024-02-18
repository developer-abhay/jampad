import academy_img1 from "../../../public/assets/service_academy1.jpg";
import academy_img2 from "../../../public/assets/service_academy2.jpg";
import jampad_img1 from "../../../public/assets/service_jampad1.jpg";
import jampad_img2 from "../../../public/assets/service_jampad2.jpg";
import ServiceItem from "./ServiceItem";
import "./ServiceData.css";

const ServiceData = () => {
  return (
    <div className="service">
      <h1>Our Services</h1>

      <ServiceItem
        cName="first-service"
        title="Music Academy"
        text="Rhythmicstan was founded in 2015 with the goal of providing high-quality music education to people all around India. The aim is not only to help students develop a lifelong appreciation for music but to provide them with musical knowledge and experience that would truly enable them to achieve their musical aspirations whether professional or recreational. We focus on regular performances and necessary theoretical sessions in addition to regular music classes. We also encourage our students to take International Music Exams such as Rockschool, Trinity College London, and ABRSM, which help them acquire a well-rounded musical education."
        img1={academy_img1}
        img2={academy_img2}
        url="https://www.rhythmicstan.com/"
      />
      <ServiceItem
        cName="first-service-reverse"
        title="Jampad & Studios"
        text="Located within the vibrant community of Rhythmicstan Music Academy, our jam pad serves as a dynamic hub for musicians of all levels to come together and explore their creativity. Equipped with state-of-the-art instruments and audio gear, our jam pad offers a welcoming space where musicians can collaborate, experiment, and hone their craft in a supportive environment. Whether you're a seasoned performer or just starting your musical journey, our jam pad provides the perfect setting to jam out, exchange ideas, and make meaningful connections with fellow musicians."
        img1={jampad_img1}
        img2={jampad_img2}
        url="/"
      />
    </div>
  );
};

export default ServiceData;
