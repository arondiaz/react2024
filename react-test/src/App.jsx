import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    username: "",
    password: "",
    country: "",
    city: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(user);

  return (
    <>
    <div className="app">
      <h1>form</h1>
      <form action="">
        <input type="text" name="name" onChange={handleChange} placeholder="name" />
        <input type="text" name="surname" onChange={handleChange} placeholder="surname" />
        <input type="text" name="username" onChange={handleChange} placeholder="username" />
        <input type="text" name="password" onChange={handleChange} placeholder="password" />
        <input type="text" name="country" onChange={handleChange} placeholder="country" />
        <input type="text" name="city" onChange={handleChange} placeholder="city" />
        <button>submit</button>
      </form>
      </div>
    </>
  );
}

export default App;

// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [input, setInput] = useState("");
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//   });

//   const changeName = () => {
//     setUser((prev) => ({ ...prev, name: input }));
//   };
//   console.log(user);
//   return (
//     <>
//       <h1>Usuario</h1>
//       <p>{user.name}</p>
//       <input
//         onChange={(e) => setInput(e.target.value)}
//         type="text"
//         placeholder="change user"
//       />
//       <button onClick={changeName}>change</button>
//     </>
//   );
// }

// export default App;

// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [counter, setCounter] = useState(0);

//   const increase = () => {
//     setCounter(counter + 1);
//   };

//   const increaseAsync = () => {
//     setTimeout(() => {
//       //--estado desactualizado
//       setCounter(counter + 1);
//       //setCounter((prev) => prev + 1);
//     }, 2000);
//   };

//   return (
//     <>
//       <div>
//         <span>{counter}</span>
//       </div>
//       <div>
//         <button onClick={increase}>Increase </button>
//       </div>
//       <div>
//         <button onClick={increaseAsync}>Increase Async </button>
//       </div>
//     </>
//   );
// }

// export default App;
