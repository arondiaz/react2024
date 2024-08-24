import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/list" element={<List />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
