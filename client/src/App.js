import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navigatebar';
import IrregularVerbPage from './components/pages/IrregularVerbPage';
import { Container } from 'react-bootstrap';
import styles from './styles/App.module.scss'

function App() {
  return (
    <Container>
      <Navbar />
      <IrregularVerbPage />
    </Container>
  );
}

export default App;
