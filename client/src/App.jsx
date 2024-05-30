import Router from "./Router.jsx";
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import styles from './assets/App.module.scss'

const App = () => {

  return (
    <div className={styles.wrapper}>
      <Header />
      <main><Router /></main>
      <Footer />
    </div>
  );
}

export default App;
