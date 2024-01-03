
import style from './NavBar.module.css';
import './icon.css';

const NavBar = () => {
  return <section className={style['nav-section']}>
    <div className={style['nav-logo-menu-container']}>
      <div className={style['nav-bar__left']}>
        <p className={style['nav-logo__name-plate']}>Good Eats</p>
        <ion-icon class="menu-icon" name="menu-outline"></ion-icon>
      </div>
      <div className={style['nav-bar__right']}>
        <p className={style['nav-bar__contact']}>+86 852 346 000</p>
        <button className={style['nav-bar__reservation-btn']}>Reservations</button>
      </div>
    </div>
  </section>
};

export default NavBar;