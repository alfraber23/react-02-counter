import './App.css';
import { Counter } from './components/Counter-UseState';
import { Routes, Route, NavLink } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { Login } from './components/Login/Login';


function App() {
  return (
    <div className="App">
      <header>
        <h1>Tienda de Zapatos</h1>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/counter-app" element={<Counter initialValue={0}/>} />
          <Route path="/login" element={ <Login /> } />
          
        </Routes>
        
      </header>
    </div>
  );
}

export default App;
