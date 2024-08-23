import { useState } from "react";
import axios from "axios"

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
      return console.log("Campos vacíos");
    }

    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if (!regex.test(email)) {
      return console.log("Email incorrecto");
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      return console.log("Credenciales inválidas");
    }

    const url = "http://challenge-react.alkemy.org"
    axios.post(url, loginData).then(response => {console.log(response.data);} )
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
