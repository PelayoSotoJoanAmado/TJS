// CatalogoAlova.jsx
// Catalogo de productos usando Alova
import { useRequest } from 'alova/client';
import { obtenerGatos } from '../api/alovaInstance';


function Gatos() {
    // useRequest ya entrega loading, error y data gestionados
    // automaticamente, incluyendo cache de la peticion GET
    const {
        loading: cargando,
        data: gatos = [],
        error,
    } = useRequest(obtenerGatos);

    if (cargando) return <p>Cargando gatos (Alova)...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Gatos- Alova</h2>

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



            </div>
            <ul>
                {/* {gatos.slice(0, 5).map((p) => (
          <li key={p.id}>{p.title} - ${p.price}</li>
        ))} */}
            </ul>
        </div>
    );
}

export default Gatos;
