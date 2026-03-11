import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import Order from './pages/Order';
import Register from './pages/Register';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
