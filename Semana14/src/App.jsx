
import './App.css'

import CatalogoFetch from './components/CatalogoFetch.jsx';
import CatalogoAxios from './components/CatalogoAxios.jsx';
import CatalogoAlova from './components/CatalogoAlova.jsx';
import GatoFetch from './components/GatoFetch.jsx';
import GatosAxios from './components/GatoAxios.jsx';
import CatalogoAlovaTest from './components/AlovaTest.jsx';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <CatalogoFetch />
        <CatalogoAxios />
        <CatalogoAlova />
        <CatalogoAlovaTest />

      </div>
        <GatoFetch />
        <div>
          <GatosAxios />
        </div>
    </div>

  );
}

export default App
