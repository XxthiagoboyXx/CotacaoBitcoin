import '../styles/global.scss';
import styles from '../styles/app.module.scss';
import 'bootstrap/dist/css/bootstrap.css';


import { NavBar } from "../components/NavBar";
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <main>
        <NavBar />

        <Component {...pageProps} />
        <Footer />
      </main>

    </div>
  )
}

export default MyApp
