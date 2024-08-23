import React from "react";

const Form = () => {
  return (
    <>
      <form>
        <label>
          <span>  Ingrese su email  </span> <br />
          <input type="text" name="email"/>
        </label>
        <br />
        <label> 
          <span>  Ingrese su contraseña </span> <br/>
          <input type="password" name="password"/>
        </label>
        <br/>
          <input type="submit" value={"Ingresar"}/>
      </form>
    </>
  );
};

export default Form;
