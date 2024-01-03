import style from "./Hero.module.css";
import hero from '../../img/good-eats-hero.jpg'
const Hero = () => {
  return <section className={style["hero-section"]}>
    <div className={style['hero-text__container']}>
      <p className={style['hero-text__main']}>Healthy Eating
        is important
        part of lifestyle</p>
      <p className={style['hero-text__description']}>Best Restaurant in the town..!</p>
    </div>
    <div className={style['hero-main-image__container']}>
      <img src={hero} alt="burger" />
    </div>
  </section>
};

export default Hero;