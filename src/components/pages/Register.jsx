import React, { useState } from "react";
import "./Register.css";

const FormularioRegistro = () => {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fotoPerfil, setFotoPerfil] = useState(null);
  const [contrasena, setContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos al servidor o realizar la validación

    if (
      usuario &&
      email &&
      telefono &&
      contrasena &&
      contrasena === confirmarContrasena
    ) {
      console.log("Registro exitoso");
    } else {
      console.error("Por favor, complete todos los campos correctamente.");
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
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
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
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div>
              <label>Foto de perfil:</label>
              <input
                type="file"
                onChange={(e) => setFotoPerfil(e.target.files[0])}
              />
            </div>
            <div>
              <label>Contraseña:</label>
              <input
                type="password"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
              />
            </div>
            <div>
              <label>Confirmar Contraseña:</label>
              <input
                type="password"
                value={confirmarContrasena}
                onChange={(e) => setConfirmarContrasena(e.target.value)}
              />
            </div>
            <button type="submit">Registrarse</button>
          </form>
        </div>
    </div>
  );
};

export default FormularioRegistro;