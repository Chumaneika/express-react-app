import styles from '../assets/Category.module.scss'
import { useState, useEffect } from 'react'
import fetchRequest from '../api/getCategory.js';

const Category = () => {
   const [categories, setCategories] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const data = await fetchRequest()
         setCategories(data)
      }

      fetchData()
   }, [])

   const getCategory = (id, name) => {
      localStorage.setItem("currentCategory", JSON.stringify({id, name}));
   }

   return (
      <section className={styles.section}>
         <div className={styles.category__inner}>
               <h2 className={styles.category__title}>Категории</h2>
               <div className={styles.category__body}>
                  {categories && categories.map((category) => (
                     <a className={styles.category__item} key={category._id} href='/api/product' onClick={() => getCategory(category._id, category.name)}>
                        <div className={styles.item__image}><img src={category.photo} alt="#" /></div>
                        <h3 className={styles.item__title}>{category.name}</h3>
                     </a>
                  ))}
               </div>
            </div>
      </section>
   );
}
 
export default Category;