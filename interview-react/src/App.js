import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Details from "./components/Details"
import Result from "./components/Result";
import "./css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/list" element={<List />} />
          <Route path="/details" element={<Details />} />
          <Route path="/result" element={<Result/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
