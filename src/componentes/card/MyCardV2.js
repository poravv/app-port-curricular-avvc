import React from "react";
import { Card } from "react-bootstrap";

function MyCardV2({ titulo, contenido, adicional, lista,color}) {
  return (
    <>
      <Card className="card" style={{ margin: `10px`, display: `flex`, flexDirection: `row`, justifyContent: `center`,backgroundColor:(color===null||color==='undefine'?'white':color) }}>
        <Card.Body>
          <Card.Title style={{ color:`white` }}>{titulo}</Card.Title>
          <Card.Text style={{ color:`white` }}>
            {contenido}
          </Card.Text>
          <Card.Text style={{ whitespace: `pre-wrap`,color:`white` }}>
            
            {
              //Aqui se aplica el salto de linea 
              lista? 
              lista.split("\n").map(function (item, idx) {
                return (
                  <span key={idx}>
                    {item}
                    <br />
                  </span>
                )
              }):null
            }
          </Card.Text>
          <Card.Text className="card-text">
            {adicional}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default MyCardV2;