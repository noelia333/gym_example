import React from 'react';
import { Link } from 'react-router-dom';

function EntradaPagina() {
  const backgroundStyle = {
    backgroundColor: 'black',
    height: '100vh',
    position: 'relative',
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '10%',
    padding: '20px',
    position: 'relative',
  };

  const logoStyle = {
    width: '300px',
    height: 'auto',
    marginRight: '20px',
    zIndex: 2,
  };

  const buttonStyle = {
    marginRight: '-200px',
    padding: '15px 30px',
    fontSize: '16px',
    backgroundColor: '#A569BD',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s, box-shadow 0.3s',
    zIndex: 2,
  };

  const iniciarSesionButtonStyle = {
    ...buttonStyle,
    marginRight: '800px',
    backgroundColor: '#5499C7',
  };

  const bodyStyle = {
    display: 'flex',
    height: '85%',
  };

  const rowStyle = {
    display: 'flex',
    width: '100%',
    marginTop: '20px',
  };

  const columnStyle = {
    flex: 1,
  };

  const smallIconStyle = {
    width: '90px',
    height: '90px',
    marginBottom: '40px', // Reducido el margen inferior
  };
  
  const leftColumnStyle = {
    flex: 0.51,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '0px 0px',
    color: 'white',
  };
  

  const rightColumnStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: '0px',
    position: 'absolute', // Cambiado a absoluto para superponer la imagen
    top: 0, // Posiciona la imagen en la parte superior
    right: 0, // Posiciona la imagen a la derecha
    width: '40%', // Ajusta el ancho de la imagen
    height: '100%', // Ajusta el alto de la imagen
    zIndex: 1, // Añadido para que la imagen esté detrás del contenido del header
  };

  const imageStyle = {
    width: '100%', // Cambiado a un valor específico en lugar del 100%
    height: '100%',
    objectFit: 'cover',
  }

  const textWhiteStyle = {
    color: 'white', // Añadido para establecer el color blanco
  };

  return (
    <div style={backgroundStyle}>
      <header style={headerStyle}>
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo de la página" style={logoStyle} />
        <div></div>
        <Link to="/Registro">
          <button style={buttonStyle}>Regístrate</button>
        </Link>
        <Link to="/Login">
          <button style={iniciarSesionButtonStyle}>Inicia Sesión</button>
        </Link>
      </header>
      <div style={bodyStyle}>
        <div style={leftColumnStyle}>
          {/* Fila 1 */}
          <div style={rowStyle}>
            <div style={columnStyle}>
              <img
                src={process.env.PUBLIC_URL + '/peso.png'}
                alt="Imagen de la fila 1"
                style={smallIconStyle}
              />
            </div>
            <div style={columnStyle}>
              <p style={textWhiteStyle}>Te gustaría encontrar ejercicios para tu entrenamiento</p>
            </div>
          </div>
          {/* Fila 2 */}
          <div style={rowStyle}>
            <div style={columnStyle}>
              <img
                src={process.env.PUBLIC_URL + '/corazon.png'}
                alt="Imagen de la fila 2"
                style={smallIconStyle}
              />
            </div>
            <div style={columnStyle}>
              <p style={textWhiteStyle}>Conoce la forma correcta de hacer un ejercicio</p>
            </div>
          </div>
        </div>
        <div style={rightColumnStyle}>
          <img src={process.env.PUBLIC_URL + '/entrada2.png'} alt="Imagen grande" style={imageStyle} />
        </div>
      </div>
    </div>
  );
}

export default EntradaPagina;
