import axios from 'axios';

const API_URL = 'https://play.nextcaddy.com/api';

// Función para autenticar al usuario y obtener un token JWT
const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login_check`, {
    username,
    password,
  });
  return response.data.token;
};

// Función para obtener los resultados de la API en base a la página solicitada
const getResults = async (token, page = 1) => {
  const response = await axios.get(`${API_URL}/results?page=${page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data['hydra:member']; // Accede a los datos dentro de 'hydra:member'
};

export { login, getResults };
