import React, { useEffect } from "react";


// // 1. Importamos los hooks de react-redux
// import { useSelector, useDispatch } from "react-redux";

// // 2. Importamos las acciones
// import { getAllPokemons } from "../redux/actions";
import Button from "../components/button/Button";
import Layout from "../components/layout/Layout";

const Login = () => {
  // // 3. Creamos las constantes para usar los hooks
  // const dispatch = useDispatch();
  // const pokemons = useSelector((state) => state.pokemons);

  // // 4. Creamos la función para llamar a la acción
  // const getPokemons = () => {
  //   dispatch(getAllPokemons());
  // };

  // // utilizando el hook useEffect pintamos
  // useEffect(() => {
  //   getPokemons();
  // }, []);

  return (
    <Layout>
      LoginPage
    </Layout>
  );
};

export default Login;
