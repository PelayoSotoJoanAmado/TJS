// alovaInstance.js
import { createAlova } from 'alova';
import ReactHook from 'alova/react';
import adapterFetch from 'alova/fetch';
 
export const alovaInstance = createAlova({
  baseURL: 'https://fakestoreapi.com',
  statesHook: ReactHook,
  requestAdapter: adapterFetch(),
  // Alova cachea automaticamente las respuestas GET p  or 5 minutos
  cacheFor: { GET: 300000 },
  responded: (respuesta) => respuesta.json(),
});

export const obtenerProductos = () =>
  alovaInstance.Get('/products');

export const alovaInstanceCats = createAlova({
  baseURL: 'https://api.thecatapi.com/v1/images/search?limit=16',
  statesHook: ReactHook,
  requestAdapter: adapterFetch(),
  // Alova cachea automaticamente las respuestas GET por 5 minutos
  cacheFor: { GET: 300000 },
  responded: (respuesta) => respuesta.json(),
});

export const obtenerGatos = () => alovaInstanceCats.Get('');


