import { useState, useEffect } from 'react';
import fetchRequest from '../api/getProducts.js';
import styles from '../assets/Products.module.scss'


const Products = () => {
   const [products, setProducts] = useState([])

   useEffect(() => {
      const fetchData = async () => {
         const infoLocal = JSON.parse(localStorage.getItem('currentCategory'))
         const data = await fetchRequest(infoLocal.id)
         setProducts(data)
      }

      fetchData()
   }, [])

   console.log(products)

   return (
      <div className={styles.home_main}>
         <div className={styles.main__title}></div>
         <div className={styles.main__body}>
            {products && products.map((product) => (
               <div key={product._id} className={styles.main__item}>
                  <div className={styles.item__image}><img src='../public/products/coffee.jpeg' alt="#" /></div>
                  <div className={styles.item__info}>
                     <h2 className={styles.item__title}>{product.name}</h2>
                     <p className={styles.item__text}>{product.description}</p>
                     <p className={styles.item__price}>{product.price}</p>
                     <button className={styles.item__btn}>+</button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
 
export default Products;
