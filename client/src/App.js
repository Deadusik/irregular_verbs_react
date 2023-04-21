import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navigatebar';
import { Container } from 'react-bootstrap';
import styles from './styles/App.module.scss'
import Footer from './components/footer/Footer';
import AppRouter from './components/AppRouter'

function App() {
  return (
    <Container fluid className={styles.App}>
      <Navbar />
      <AppRouter/>
      <Footer/>
    </Container>
  );
}

export default App;
