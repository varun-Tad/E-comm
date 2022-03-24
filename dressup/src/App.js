import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Productspage" element={<ProductsPage />} />
      </Routes>
    </div>
  );
}

export default App;
