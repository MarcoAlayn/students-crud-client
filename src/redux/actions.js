import axios from 'axios';

// 1. Definimos los tipos de acciones
export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';

// 2. Definimos las acciones
export const getAllPokemons = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
      console.log('response', response);
      return dispatch({ type: GET_ALL_POKEMONS, payload: response.data.results });
    } catch (error) {
      console.log('error', error);
    }
  };
};