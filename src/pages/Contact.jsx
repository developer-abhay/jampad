import Hero from "../components/Hero/Hero";
import ContactBanner from "/assets/demo.jpeg";
import ContactForm from "../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <section>
      <Hero
        cName="hero-mid"
        img={ContactBanner}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
    </section>
  );
};

export default Contact;
