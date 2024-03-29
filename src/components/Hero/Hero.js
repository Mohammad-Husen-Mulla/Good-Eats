import style from "./Hero.module.css";
import hero from '../../img/good-eats-hero.jpg';
import plate1 from '../../img/plate-img-1.jpg';
import plate2 from '../../img/plate-img-2.jpg';
import plate3 from '../../img/plate-img-3.jpg';

const Hero = () => {
  return <section className={style["hero-section"]}>
    <div className={style['hero-text__container']}>
      <p className={style['hero-text__main']}>Healthy Eating
        is important
        part of lifestyle</p>
      <p className={style['hero-text__description']}>We use the freshest ingredients in preparing our food to provide the best quality and taste. Try our delicious food today! </p>
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
    <div className={style['hero-recipe-plate__container']}>
      <div>
        <img src={plate2} alt="plate2" />
      </div>
      <div>
        <img src={plate1} alt="plate1" />
      </div>
      <div>
        <img src={plate3} alt="plate3" />
      </div>
    </div>
  </section>
};

export default Hero;