import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './components/Login';
import Adduser from './components/Adduser';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Viewuser from './components/Viewuser';

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path="/" exact element={<Login/>}/>
  <Route path="/add" exact element={<Adduser/>}/>
  <Route path="/view" exact element={<Viewuser/>}/>
  
</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
