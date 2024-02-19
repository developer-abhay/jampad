import img_mixer from "../../../public/assets/equip_mixer.jpg";
import img_pa from "../../../public/assets/equip_pa.jpg";
import img_pa2 from "../../../public/assets/equip_pa2.jpg";
import img_mics from "../../../public/assets/equip_mics.jpg";
import img_bassAmp from "../../../public/assets/equip_bass_amp.jpg";
import img_elecAmp from "../../../public/assets/equip_elec_amp.jpg";
import img_drums from "../../../public/assets/equip_drums.jpg";
import img_guitars from "../../../public/assets/equip_guitar.jpg";
import img_processor from "../../../public/assets/equip_processor.jpg";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery">
      <h1>Equipment Gallery</h1>
      <div className="gallery-track">
        <div className="img-container">
          <img src={img_drums} />
          <h3>Drum Set - Mapex Tornado Body and Zildjian Simbles</h3>
        </div>

        <div className="img-container">
          <img src={img_bassAmp} />
          <h3>Bass Amp - Ampeg RB 110 Rocket Bass</h3>
        </div>
        <div className="img-container">
          <img src={img_elecAmp} />
          <h3>Electric Guitar Amp - Fender Champion 100 wt Combo</h3>
        </div>
        <div className="img-container">
          <img src={img_mixer} />
          <h3>Mixer- Yamaha MG12x</h3>
        </div>
        <div className="img-container">
          <img src={img_pa} />
          <h3>PA QSC 1000 wt & Alto 2000 wt</h3>
        </div>
        <div className="img-container">
          <img src={img_pa2} />
          <h3>Alto 2000 wt</h3>
        </div>
        <div className="img-container">
          <img src={img_mics} />
          <h3>Mics - Sennheiser, Shure, JBL</h3>
        </div>
        <div className="img-container">
          <img src={img_guitars} />
          <h3>Guitars (Extra Charges)</h3>
        </div>
        <div className="img-container">
          <img src={img_processor} />
          <h3>Boss M-80 Processor (Extra Charges)</h3>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
