import { useState } from "react";

const Form = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col justify-center items-center bg-red-200 min-w-96 max-w-screen-xl py-8 rounded-xl ">
      <form action="" onSubmit={handleSubmit} className="flex flex-col ">
        <label htmlFor="email" className="my-2">
          Ingrese su email
        </label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          className="px-4 py-2 rounded-md"
        />

        <label htmlFor="password" className="my-2">
          Ingrese su password
        </label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          className="px-4 py-2 rounded-md"
        />

        <button className="bg-red-600 p-2 rounded-md text-white mx-2 my-6 mt-8">
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
