// 1. Importamos nuestras acciones
import { GET_ALL_POKEMONS } from './actions';

// 2. Define el estado inicial del reducer
const initialState = {
  pokemons: [],
};

// 3. Define el reducer
export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }
}
