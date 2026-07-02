// CatalogoAxios.jsx
// Catalogo de productos usando Axios
import { useState, useEffect } from 'react';
import axios from 'axios';
 
// Interceptor: se ejecuta antes de CADA peticion realizada con esta instancia
const clienteApi = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/images/search?limit=16',
});
 
clienteApi.interceptors.request.use((config) => {
  console.log('Solicitud enviada a: ' + config.url);
  return config;
});
 
function GatosAxios() {
  const [gatos, setGatos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [numero, setNumero] = useState(0);
 
  useEffect(() => {
    async function cargarProductos() {
      try {
        // Axios ya entrega los datos parseados en .data
        // y rechaza la promesa automaticamente ante errores HTTP
        const respuesta = await clienteApi.get('');
        setGatos(respuesta.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    }
    cargarProductos();
  }, [numero]);
 
  if (cargando) return <p>Cargando gatos (Axios)...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Gatos- Axios</h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>

                {gatos.map((c) => (
                    <div
                        key={c.id}
                        style={{
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            backgroundColor: '#fff',
                            display: 'flex',
                            flexDirection: 'column',
                            alignContent: 'center',
                            flex: '1 1 1'
                        }}
                    >
                        <div style={{ padding: "1rem" }} >Funny cats  </div>
                        <img
                            src={c.url}
                            alt="gato"
                            key={c.id}
                            style={{ ali: "center", width: "200px", height: "100px", objectFit: "cover", flex: "1 1 200px" }}
                        ></img>

                        <div style={{ padding: '12px', textAlign: "center" }}>
                            <p style={{ margin: 0, fontWeight: 'bold' }}>Hi</p>

                        </div>
                    </div>
                ))}

                <button onClick={() => setNumero(numero + 1)}>{numero}</button>


            </div>
            <ul>
                {/* {gatos.slice(0, 5).map((p) => (
          <li key={p.id}>{p.title} - ${p.price}</li>
        ))} */}
            </ul>
        </div>
    );
}
 
export default GatosAxios;
