
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import ProductList from "./pages/ProductList";
import Categories from "./pages/Categories";
import Footer from './Components/Footer';
import Subscribe from "./pages/Subscribe";
import ProductDetail from "./pages/ProductDetail";
import Admin from "./pages/Admin";

// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";




function App() {
  return (
    <Router>
      <Navbar />
      <div className="page-content min-h-screen bg-chelsea-cucumber border-2 border-white ">
        <Routes>
          <Route path="/test" element={<ProductList />} />

          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />

          <Route path="/categories/subscribe" element={<Subscribe />} />
          <Route path="/categories/products" element={<ProductList />} />

          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/admin" element={<Admin />} />


        </Routes>
      </div>
      <Footer />
    </Router>
  );
};
// serviceWorkerRegistration.register();

export default App;
