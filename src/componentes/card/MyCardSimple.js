import React from "react";
import '../../CSS/MyCardSimple.css'

function MyCardSimple({ contenido }) {
  return (
    <>
    <div className="column" style={{ margin: `5px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
      <div className='tarea-contenedor'>
      {contenido}
    </div>
    </div>
    </>
);
}

export default MyCardSimple;