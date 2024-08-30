import "../css/form.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = form;

    if (email.trim() === "" || password === "") {
      return console.log("Error");
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      return console.log("Credenciales inválidas");
    }

    const url = "http://challenge-react.alkemy.org";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const token = data.token;
        localStorage.setItem("token", token);
        navigate("/films");
      })
      .catch((error) => {
        console.error("Hubo un problema con la solicitud fetch:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Inicia sesión</h3>
      <label>
        {" "}
        Ingresa el mail
        <div className="container-input">
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
      </label>

      <label htmlFor="password">
        {" "}
        Ingresa su contraseña
        <input
          id="password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
      </label>

      <input type="submit" />
    </form>
  );
};

export default Form;
