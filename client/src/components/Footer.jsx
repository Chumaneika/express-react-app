import styles from '../assets/Footer.module.scss';

const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className={styles.footer__container}>
            <div className={styles.footer__inner}>
               <div className={styles.footer__left}>
                  <a href="/" className={styles.footer__logo}>
                     <div className={styles.footer__logo_image}><img src="../public/footer__logo.svg" alt="" /></div>
                     <h1 className={styles.footer__logo_title}>Ngopi</h1>
                  </a>
                  <h2 className={styles.footer__text}>Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla</h2>
                  <div className={styles.footer__other}>
                     <a className={styles.mail}>baba@boi.com</a>
                     <a className={styles.phone}>Phone : +7 (133) 742 00 07</a>
                  </div>
               </div>
               <nav className={styles.footer__menu}>
                  <ul className={styles.menu__list}>
                     <h2 className={styles.menu__title}>Quick Links</h2>
                     <li className={styles.menu__item}>Services</li>
                     <li className={styles.menu__item}>Portfolio</li>
                     <li className={styles.menu__item}>About us</li>
                     <li className={styles.menu__item}>Testimonial</li>
                  </ul>
                  <ul className={styles.menu__list}>
                     <h2 className={styles.menu__title}>Resources</h2>
                     <li className={styles.menu__item}>Support</li>
                     <li className={styles.menu__item}>Privacy Policy</li>
                     <li className={styles.menu__item}>Terms & Conditions</li>
                  </ul>
                  <ul className={styles.menu__list}>
                     <h2 className={styles.menu__title}>Social Media</h2>
                     <div>
                        <li className={styles.menu__item_image}><img src="../public/media/Facebook.svg" alt="FC" /></li>
                        <li className={styles.menu__item_image}><img src="../public/media/Twitter.svg" alt="Twitter" /></li>
                        <li className={styles.menu__item_image}><img src="../public/media/Instagram.svg" alt="Instagram" /></li>
                        <li className={styles.menu__item_image}><img src="../public/media/Linkedin.svg" alt="In" /></li>
                        <li className={styles.menu__item_image}><img src="../public/media/Youtube.svg" alt="YouTube" /></li>
                     </div>
                  </ul>
               </nav>
            </div>
         </div>
      </footer>
   );
}
 
export default Footer;