import { Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import './App.css';




function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Login/>} />
      </Routes>
    </div>

  );
}

export default App;
