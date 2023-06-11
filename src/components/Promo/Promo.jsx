const promo = ["../public/slider/promo1.svg", "../public/slider/promo2.svg"];
import styles from "../Slider/Slider.module.sass";
const Promo = () => {
  return (
    <div>
      <div className={styles.imgSliderPromo}>
        <img src={promo[0]} alt="promo1" />
      </div>
      <div className={styles.imgSliderPromo2}>
        <img src={promo[1]} alt="promo1" />
      </div>
    </div>
  );
};

export default Promo;
