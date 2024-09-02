import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import DataTable from './DataTable';
import { login, getResults } from '../services/apiService';

const InfiniteScrollComponent = () => {
  const [token, setToken] = useState(''); // Almacena el token de autenticación
  const [results, setResults] = useState([]); // Almacena los resultados de la API
  const [page, setPage] = useState(2); // Comienza en la página 2 después de cargar los primeros 30 registros
  const [hasMore, setHasMore] = useState(true); // Indica si hay más datos por cargar

  // Autenticación inicial para obtener el token JWT
  useEffect(() => {
    const authenticate = async () => {
      const jwt = await login('666666666', 'admin');
      setToken(jwt);
    };
    authenticate();
  }, []);

  // Carga los primeros 30 registros
  useEffect(() => {
    if (token) {
      const loadInitialData = async () => {
        try {
          const initialResults = await getResults(token, 1); // Carga solo la primera página (30 registros)
          setResults(initialResults);

          // Si hay menos de 30 registros, no continuar cargando más
          if (initialResults.length < 30) {
            setHasMore(false);
          }
        } catch (error) {
          console.error('Error al cargar los datos iniciales:', error);
          setHasMore(false);
        }
      };
      loadInitialData();
    }
  }, [token]);

  // Función para cargar más datos cuando el usuario hace scroll
  const fetchMoreData = async () => {
    try {
      const newResults = await getResults(token, page);
      if (newResults.length === 0) {
        setHasMore(false); // Detiene el scroll infinito si no hay más datos
      } else {
        setResults((prevResults) => [...prevResults, ...newResults]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error('Error al obtener más datos:', error);
      setHasMore(false);
    }
  };

  return (
    <InfiniteScroll
      dataLength={results.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more results</p>}
    >
      <DataTable data={results} />
    </InfiniteScroll>
  );
};

export default InfiniteScrollComponent;
