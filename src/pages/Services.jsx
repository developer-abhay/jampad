import Hero from "../components/Hero/Hero";
import ServiceBanner from "../../public/assets/banner_service.jpg";
import ServiceData from "../components/ServiceData/ServiceData";

const Services = () => {
  return (
    <section>
      <Hero
        cName="hero-mid"
        img={ServiceBanner}
        title="Service"
        btnClass="hide"
      />
      <ServiceData />
    </section>
  );
};

export default Services;
