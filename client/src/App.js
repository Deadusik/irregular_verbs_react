import { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navigatebar';
import { Container, Spinner } from 'react-bootstrap';
import styles from './styles/App.module.scss'
import Footer from './components/footer/Footer';
import AppRouter from './components/AppRouter'
import { Context } from '.';
import { check } from './http/userAPI';
import { observer } from 'mobx-react-lite';

const App = observer(() => {
  const { user } = useContext(Context)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      console.log(data)
      user.setIsAuth(true)
    }).finally(() => setIsLoading(false))
  }, [])

  if (isLoading) {
    return (
      <Container className='mt-5 d-flex justify-content-center align-items-center'>
        <Spinner animation="border" variant="info" />
      </Container>
    )
  }

  return (
    <Container fluid className={styles.App}>
      <Navbar />
      <AppRouter />
      <Footer />
    </Container>
  );
})

export default App;
