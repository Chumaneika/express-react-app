import styles from '../assets/MoreProducts.module.scss'
import { useState } from 'react'

const MoreProducts = () => {
   const [buttonOn, setButtonOn] = useState([
      {name: 'Популярные', state: true, id: 1},
      {name: 'Новинки', state: false, id: 2},
      {name: 'Десерты', state: false, id: 3}
   ])

   const changeState = nextId => {
      const newArr = buttonOn.map(item => {
         if (item.state === true) return {...item, state: false}
         if (item.id === nextId) return {...item, state: true}
         return item
      })
      setButtonOn(newArr)
   }  

   return (
      <section className={styles.section}>
         <div className={styles.products__inner}>
            <div className={styles.products__title}>Товары</div>
            <div className={styles.products__category}>
               {buttonOn.map(({ name, state, id }) => (
                  state ? <div className={styles.category__btn_on} onClick={() => changeState(id)} key={id}>{name}</div> :
                           <div className={styles.category__btn_off} onClick={() => changeState(id)} key={id}>{name}</div>
               ))}

            </div>
            <div className={styles.products__goods}></div>
         </div>
      </section>
   );
}
 
export default MoreProducts;