
import './App.css'
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import { Products } from './pages/Product';
import { LoginAuth } from './pages/Login';
import { Category } from './pages/Category';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginAuth />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Category />} />
      </Routes>
    </Router>
  )
}

export default App
