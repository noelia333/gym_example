import React from 'react';

function Registro() {
  const containerStyle = {
    display: 'flex',
    height: '100vh',
  };

  const imageContainerStyle = {
    flex: 1,
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '10%',
    padding: '10px',
  };

  const logoStyle = {
    width: '300px',
    height: 'auto',
    position: 'fixed',
    top: '20px',
  };

  const contentContainerStyle = {
    flex: 0.8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '120px',
    marginTop: '30px',
  };

  const cardStyle = {
    boxShadow: '0 4px 8px rgba(1, 1, 1, 1)',
    padding: '40px',
    borderRadius: '8px',
    color: 'black',
  };

  const welcomeStyle = {
    marginBottom: '10px',
    color: 'purple',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    boxSizing: 'border-box',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fondo transparente
  };

  const buttonStyle = {
    width: '100%',
    padding: '15px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#6C3483', // Cambia el color a morado más oscuro
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img
          src={process.env.PUBLIC_URL + '/registro.png'}
          alt="Imagen de fondo"
          style={imageStyle}
        />
      </div>
      <div style={headerStyle}>
        <img src={process.env.PUBLIC_URL + '/logo2.png'} alt="Logo de la página" style={logoStyle} />
      </div>
      <div style={contentContainerStyle}>
        <div style={cardStyle}>
          <h2 style={welcomeStyle}>¡Bienvenido de vuelta!</h2>
          <br />
          <h3>Crear cuenta aquí</h3>
          <br />
          <input id="nombre" type="text" placeholder="Nombre completo" style={inputStyle} />
          <input id="identificacion" type="text" placeholder="Numero de identificacion" style={inputStyle} />
          <input id="correo" type="text" placeholder="Correo Electrónico" style={inputStyle} />
          <input id="contrasena" type="password" placeholder="Contraseña" style={inputStyle} />
          <input id="confirmaContrasena" type="password" placeholder="Confirme su contraseña" style={inputStyle} />
          <br />
          <br />
          <button style={buttonStyle}>Registrate</button>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Registro;