import axios from "axios";

const URL =
"http://localhost:4000/api/pokemon" ||
  "https://pokemon-crud-production.up.railway.app/api/pokemon" ||
  "";

console.log(URL);
export const getPokemonsRequest = async () => {
  try {
    const data = await axios.get(URL);
    return data;
  } catch (error) {
    if (error.response) {
      // La respuesta fue hecha y el servidor respondió con un código de estado
      // que esta fuera del rango de 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // La petición fue hecha pero no se recibió respuesta
      // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
      // http.ClientRequest en node.js
      console.log(error.request);
    } else {
      // Algo paso al preparar la petición que lanzo un Error
      console.log("Error", error.message);
    }
    console.log(error.config);
    return [];
  }
};

export const createPokeRequest = async (poke) => {
  try {
    const data = await axios.post(URL, poke);
    console.log("Se creo el pokemon");
    return data;
  } catch (error) {
    if (error.response) {
      // La respuesta fue hecha y el servidor respondió con un código de estado
      // que esta fuera del rango de 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // La petición fue hecha pero no se recibió respuesta
      // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
      // http.ClientRequest en node.js
      console.log(error.request);
    } else {
      // Algo paso al preparar la petición que lanzo un Error
      console.log("Error", error.message);
    }
    console.log(error.config);
    return [];
  }
};

export const getPokeRequest = async (id) => {
  try {
    const data = await axios.get(`${URL}/${id}`);
    return data;
  } catch (error) {
    if (error.response) {
      // La respuesta fue hecha y el servidor respondió con un código de estado
      // que esta fuera del rango de 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // La petición fue hecha pero no se recibió respuesta
      // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
      // http.ClientRequest en node.js
      console.log(error.request);
    } else {
      // Algo paso al preparar la petición que lanzo un Error
      console.log("Error", error.message);
    }
    console.log(error.config);
    return [];
  }
};

export const deletePokemRequest = async (id) => {
  try {
    // console.log("Id from delete", id);
    const data = await axios.delete(`${URL}/${id}`);
    return data;
  } catch (error) {
    if (error.response) {
      // La respuesta fue hecha y el servidor respondió con un código de estado
      // que esta fuera del rango de 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // La petición fue hecha pero no se recibió respuesta
      // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
      // http.ClientRequest en node.js
      console.log(error.request);
    } else {
      // Algo paso al preparar la petición que lanzo un Error
      console.log("Error", error.message);
    }
    console.log(error.config);
    return [];
  }
};

export const updatePokeRequest = async (id, newFields) => {
  console.log("update from poke.api", { id, newFields });
  await axios.put(`${URL}/${id}`, newFields);
};

export const togglePokeDoneRequest = async (id, done) =>
  await axios.put(`${URL}/${id}`, {
    done,
  });
