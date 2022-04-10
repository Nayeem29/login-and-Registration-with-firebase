import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Products from './Components/Products/Products';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={
          <RequireAuth>
            <Products />
          </RequireAuth>
        }></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
