// Login.js
import React, { useState } from 'react';
import './Login.css'
import showPassIcon from '../images/icons/showPass.svg'
import hidePassIcon from '../images/icons/hidePass.svg'

function Login() {
    const [username, setUsername] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
  
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = () => {
        //lógica para autenticar al usuario
        if (username === 'usuario' && password === 'contraseña') {
        alert('Inicio de sesión exitoso');
        } else {
        alert('Credenciales incorrectas');
        }
    }

  return (
    <div className='Login'>
        <div className='loginContainer'>
            <div className='tittleContainer'>
                <h2>Conecta2</h2>
                <span>Inicio de Sesion</span>
            </div>
            <div className='userContainer'>
                <input
                    type="text"
                    placeholder="Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className='passwordContainer'>
                <input
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder='Contraseña'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    
                />
                
                <div onClick={togglePasswordVisibility}>
                    {passwordVisible ? (<img src={hidePassIcon} alt='Icono 1'></img>) : (<img src={showPassIcon} alt='Icono 2'></img>)}
                 </div>
            </div>
            <div className='buttonContainer'>
                <button onClick={handleLogin}>Iniciar Sesión</button>
            </div>
            
        </div>

    </div>
  );
}

export default Login;
