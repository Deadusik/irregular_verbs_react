import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navigatebar';
import IrregularVerbPage from './components/pages/IrregularVerbPage';

function App() {
  return (
    <div className="container">
      <Navbar />
      <IrregularVerbPage />
    </div>
  );
}

export default App;
