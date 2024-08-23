import { useState } from "react";
import axios from "axios";
import swAlert from "@sweetalert/with-react";

const Form = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginData;

    if (email.trim() === "" || password === "") {
      return swAlert("Campos vacíos");
    }

    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if (!regex.test(email)) {
      return swAlert("Email incorrecto");
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      return swAlert("Credenciales inválidas");
    }

    const url = "http://challenge-react.alkemy.org";
    axios.post(url, loginData).then((response) => {
      swAlert(<h2> Inicio de sesión exitoso! </h2>);
      console.log(response.data);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span> Ingrese su email </span> <br />
          <input
            type="text"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <span> Ingrese su contraseña </span> <br />
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <input type="submit" value={"Ingresar"} />
      </form>
    </>
  );
};

export default Form;
