import "../css/form.css";
import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = form;

    if (email.trim() === "" || password === "") {
      return console.log("Error");
    }
  };

  console.log(form);
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
