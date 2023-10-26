import React, { useState, useEffect } from "react";
import "./Register.css";

const Register = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);


  const saveUserLocalStorage = () => {
    const userData = {
      user,
      email,
      phone,
      password,
    };
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    registeredUsers.push(userData);
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
  };

  // Cargar datos del usuario almacenados en localStorage al montar el componente
  useEffect(() => {
    const storedRegisteredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
    if (storedRegisteredUsers) {
      // Puedes hacer algo con los datos almacenados si lo deseas.
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user && email && phone && password === confirmPassword) {
      console.log("Registro exitoso");
      saveUserLocalStorage();
    } else {
      setPasswordError("Las contraseñas no coinciden.");
    }
  };


  return (
    <div className="Register">
      <div className="registerBackground">
      </div>
      <div className="registerContainer">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nombre de usuario:</label>
              <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div>
              <label>Correo electrónico:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Número de teléfono:</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label>Foto de perfil:</label>
              <input
                type="file"
                onChange={(e) => setProfilePic(e.target.files[0])}
              />
            </div>
            <div>
              <label>Contraseña:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label>Confirmar Contraseña:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="submit">Registrarse</button>
          </form>
        </div>
    </div>
  );
};

export default Register;