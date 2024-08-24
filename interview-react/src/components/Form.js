import { useState } from "react";
import axios from "axios";
import swAlert from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

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
      const dataToken = response.data.token;
      localStorage.setItem("token", dataToken);
      navigate("/list");
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">
                <span>Ingrese su email</span>
              </label>
              <input
                type="text"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="email@example.com"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                <span>Ingrese su contraseña</span>
              </label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Contraseña"
              />
            </div>
            <input type="submit" value="Ingresar" className="btn btn-primary" />
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
