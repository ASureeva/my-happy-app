import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage'
import NavBarComponent from './components/NavBarComponent'
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className='head'>
      <NavBarComponent/>
      <HomePage/>
      <FooterComponent/>
    </div>
  );
}

export default App;