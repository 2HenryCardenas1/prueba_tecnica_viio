const { default: axios } = require("axios");

const loginFetch = async (email, password) => {
  try {
    const response = await axios.post("https://dummyjson.com/auth/login", {
      username: email,
      password: password,
    });

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new Error("Error en la solicitud: Credenciales incorrectas");
    } else {
      throw new Error("Error en la solicitud: Ocurrió un problema");
    }
  }
};

export { loginFetch };
