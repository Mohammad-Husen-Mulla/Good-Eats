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
    <div className={style["hero-scroll__container"]}>

      <p>Scroll</p>
      <svg width="2" height="406" viewBox="0 0 2 406" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="1" x2="1.00002" y2="405" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" stroke-dasharray="8 8" />
      </svg>

    </div>
  </section>
};

export default Hero;