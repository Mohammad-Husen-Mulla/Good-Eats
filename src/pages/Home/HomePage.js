import style from './Home.module.css';

const HomePage = () => {
  return <section className={style["hero-section"]}>
    <div className={style["hero-section__text-container"]}>
      <h1>
        Healthy Eating
        is important
        part of lifestyle
      </h1>
    </div>
  </section>
};

export default HomePage;