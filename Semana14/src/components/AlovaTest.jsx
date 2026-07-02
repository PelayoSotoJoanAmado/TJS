// CatalogoAlova.jsx
// Catalogo de productos usando Alova
import { useRequest } from 'alova/client';
import { createAlova } from 'alova';
import adapterFetch from 'alova/fetch';
import ReactHook from 'alova/react';
// import { obtenerProductos } from '../api/alovaInstance';

const alovaInstance = createAlova({
    statesHook: ReactHook,
    requestAdapter: adapterFetch(),
    baseURL: 'https://fakestoreapi.com',
    responded: response => response.json() 
})


function CatalogoAlovaTest() {
    const getProducts = alovaInstance.Get('/products');
    const { loading, data, error } = useRequest(getProducts);

    if (loading) return <p>Cargando productos (Alova)...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Catalogo - Alova</h2>
            <ul>
                {data.slice(0, 5).map((p) => (
                    <li key={p.id}>{p.title} - ${p.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default CatalogoAlovaTest;
