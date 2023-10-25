// Login.js
import React, { useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';


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
        <div className='loginBackground' > 
        </div>
        <div className='loginContainer'>
            <div className='tittleContainer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="149" height="86" viewBox="0 0 3890 2060"><g fill="rgb(204, 107, 253)"><g><path d="M149 2045 c-52 -17 -108 -66 -132 -118 -15 -32 -17 -113 -17 -904 0 -868 0 -868 21 -908 12 -22 33 -51 48 -63 61 -55 -53 -52 1876 -52 1953 0 1819 -4 1883 60 66 65 63 14 60 980 l-3 876 -25 37 c-30 44 -82 81 -136 96 -27 8 -558 11 -1784 10 -1472 0 -1752 -3 -1791 -14z m1481 -465 l0 -190 -35 0 -35 0 0 110 c0 61 -3 110 -7 110 -5 -1 -62 -50 -128 -110 -66 -61 -123 -110 -127 -110 -4 0 -8 83 -8 185 l0 185 40 0 39 0 3 -109 3 -108 125 113 c69 63 126 114 128 114 1 0 2 -85 2 -190z m-940 158 c55 -29 92 -74 70 -88 -24 -16 -59 -11 -88 10 -61 45 -149 31 -185 -29 -67 -113 74 -222 188 -145 28 19 45 23 66 19 40 -9 36 -27 -12 -69 -128 -109 -339 -24 -339 137 0 141 167 232 300 165z m1370 -13 l0 -35 -135 0 -135 0 0 -45 0 -44 118 -3 117 -3 3 -27 3 -28 -120 0 -121 0 0 -45 0 -45 135 0 135 0 0 -30 0 -30 -172 2 -173 3 -3 170 c-1 93 0 175 2 182 4 10 46 13 176 13 l170 0 0 -35z m313 21 c18 -7 48 -28 67 -46 33 -31 34 -33 15 -46 -27 -20 -52 -17 -88 9 -40 28 -111 30 -151 4 -34 -23 -60 -81 -51 -115 3 -14 21 -40 40 -59 29 -29 40 -33 83 -33 40 0 57 6 81 26 24 20 37 24 61 19 16 -4 32 -10 34 -14 9 -14 -24 -50 -71 -77 -97 -58 -238 -20 -289 78 -20 39 -18 122 6 168 20 38 57 72 101 89 36 14 125 13 162 -3z m347 -141 l0 -155 65 0 65 0 0 -30 0 -30 -170 0 -170 0 0 30 0 30 65 0 65 0 0 155 0 155 40 0 40 0 0 -155z m206 103 c16 -29 39 -71 51 -93 13 -22 29 -50 35 -62 15 -30 21 -29 41 10 9 17 37 68 61 112 43 78 46 80 85 83 25 2 41 -1 41 -8 0 -9 -164 -305 -200 -360 -8 -13 -11 -12 -23 4 -8 11 -23 36 -33 55 -10 20 -36 64 -56 99 -21 34 -38 64 -38 67 0 2 -13 26 -29 53 -16 27 -32 59 -36 70 -6 20 -3 22 33 22 37 0 40 -3 68 -52z m123 38 c17 -20 2 -48 -23 -44 -24 3 -34 37 -14 49 18 12 24 11 37 -5z m561 -16 l0 -30 -102 0 -103 0 75 -48 c41 -27 87 -63 103 -81 88 -104 -46 -215 -207 -170 -43 12 -96 58 -96 83 0 26 57 20 92 -9 57 -48 158 -26 158 35 0 35 -32 63 -159 140 -80 47 -91 58 -91 82 l0 28 165 0 165 0 0 -30z m-2491 0 c82 -41 124 -126 101 -202 -34 -116 -176 -170 -296 -114 -69 32 -97 74 -102 151 -3 54 -1 64 27 102 17 23 48 51 68 62 52 27 150 28 202 1z m474 -597 c18 -32 69 -119 112 -193 141 -243 236 -399 244 -405 5 -3 35 39 67 93 31 53 85 144 120 202 34 58 74 128 90 155 15 28 48 84 74 125 l46 75 95 -1 c141 0 139 5 65 -121 -304 -524 -540 -916 -551 -920 -9 -3 -154 237 -521 857 -62 105 -94 165 -94 174 0 6 59 12 147 14 l72 2 34 -57z m398 34 c43 -33 46 -81 6 -124 -28 -31 -63 -29 -98 6 -36 36 -37 60 -3 100 28 33 66 40 95 18z"></path><path id="ple7adBPf" d="M948 1663 c-74 -46 -68 -152 10 -189 43 -20 114 -14 144 12 57 52 54 136 -6 173 -41 26 -110 27 -148 4z"></path></g></g></svg>
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
                <div className='passIcon' onClick={togglePasswordVisibility}>
                    {passwordVisible ? 
                        (<svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='passIconColor' d="M2 2L22 22" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path className='passIconColor' d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path className='passIconColor' d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>)
                         : (<svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path className='passIconColor' d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                         <path className='passIconColor' d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                         <circle className='passIconColor' cx="12" cy="12" r="3" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                         </svg>)}
                 </div>
            </div>
            <div className='buttonContainer'>
                <button onClick={handleLogin}>Iniciar Sesión</button>
                <Link to="/register" >¿No tienes una cuenta? Registrate</Link>
                
            </div>

            
        </div>


    </div>
  );
}

export default Login;
