import styles from '../assets/Header.module.scss';

const Header = () => {
   return (
      <header className={styles.header}>
         <div className={styles.header__container}>
            <div className={styles.header__inner}>
               <a href='/' className={styles.header__logo}><img src="../public/Logo.svg" alt="" /></a>
               <nav className={styles.header__list}>
                  <ul className={styles.menu__list}>
                     <li className={styles.menu__item}><a href="/" className={styles.menu__link}>Главная</a></li>
                     <li className={styles.menu__item}><a href="/api/products" className={styles.menu__link}>Товары</a></li>
                  </ul>
               </nav>
               <div className={styles.header__right}>
                  <div className={styles.profile}><img src="../public/key.svg" alt="Profile" /></div>
                  <div className={styles.cart}><img src="../public/cart.svg" alt="Cart" /></div>
               </div>
            </div>
         </div>
      </header>
   );
}
 
export default Header;