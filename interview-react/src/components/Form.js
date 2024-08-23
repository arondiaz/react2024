import React from "react";
import { useState } from "react";

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
