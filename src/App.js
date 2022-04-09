import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
