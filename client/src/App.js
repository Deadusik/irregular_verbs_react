import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navigatebar';
import { Container } from 'react-bootstrap';
import styles from './styles/App.module.scss'
import Footer from './components/footer/Footer';
import AppRouter from './components/AppRouter'
import { useContext, useEffect } from 'react';
import { Context } from '.';
import { check } from './http/userAPI';

function App() {
  const { user } = useContext(Context)

  useEffect(() => {
    check().then(data => {
      user.setIsAuth(true)
    })
  }, [])

  return (
    <Container fluid className={styles.App}>
      <Navbar />
      <AppRouter />
      <Footer />
    </Container>
  );
}

export default App;
