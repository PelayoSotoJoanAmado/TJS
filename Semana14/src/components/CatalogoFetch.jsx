import { useState, useEffect } from 'react';
 
function CatalogoFetch() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const controlador = new AbortController();
    
    const traerProductos = async () => {
      try {
        const respuesta = await fetch('https://fakestoreapi.com/products', {
          signal: controlador.signal
        });

        if (!respuesta.ok) {
          throw new Error('Error HTTP: ' + respuesta.status);
        }

        const datos = await respuesta.json();
        setProductos(datos);
        setCargando(false);

      } catch(err){
        if (err.name === 'AbortError' || err.message?.includes('aborted')) {
          return; 
        }
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    traerProductos();
    return () => controlador.abort();
    }, []);

  // useEffect(() => {
  //   const controlador = new AbortController();
 

  //   fetch('https://fakestoreapi.com/products', {
  //     signal: controlador.signal
  //   })
  //     .then((respuesta) => {
  //       // Fetch NO rechaza la promesa ante errores HTTP (404, 500)
  //       // hay que verificarlo manualmente con response.ok
  //       if (!respuesta.ok) {
  //         throw new Error('Error HTTP: ' + respuesta.status);
  //       }
  //       return respuesta.json();
  //     })
  //     .then((datos) => {
  //       setProductos(datos);
  //       setCargando(false);
  //     })
  //     .catch((err) => {
  //       if (err.name === 'AbortError' || err.message?.includes('aborted')) {
  //         return; 
  //       }
  //       setError(err.message);
  //       setCargando(false);
  //     });
 
  //   // Limpieza: cancela la peticion si el componente se desmonta
  //   return () => controlador.abort();
  // }, []);
 
  if (cargando) return <p>Cargando productos (Fetch)...</p>;
  if (error) return <p>Error: {error}</p>;
 
  return (
    <div>
      <h2>Catalogo - Fetch API</h2>
      <ul>
        {productos.slice(0, 5).map((p) => (
          <li key={p.id}>{p.title} - ${p.price}</li>
        ))}
      </ul>
    </div>
  );
}
 
export default CatalogoFetch;
