import styles from '../assets/Home.module.scss'
import Category from '../components/Category'
import MoreProducts from '../components/MoreProducts';

const Home = () => {
   return (
      <div className={styles.home__main}>
         <div className={styles.main__container}>
            <Category />
            <MoreProducts />
         </div>
      </div>
   );
}
 
export default Home;