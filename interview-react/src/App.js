import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <>
      <Routes>
        <Route  path="/" element={<Form/>}/>
        <Route path="/list" element={<List/>}/>
      </Routes>
    </>
  );
}

export default App;
