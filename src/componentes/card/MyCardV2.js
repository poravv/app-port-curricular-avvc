import React from "react";
import { Card } from "react-bootstrap";

function MyCardV2({ titulo, contenido, adicional, lista,color}) {
  return (
    <>
      <Card className="card"  style={{ backgroundColor:`#1b1b32`,margin: `10px`, display: `flex`, flexDirection: `row`, justifyContent: `center`,
      //backgroundColor:(color===null||color==='undefine'?'white':color) 
      color:`white`
      }}>
        <Card.Body>
          <Card.Title >{titulo}</Card.Title>
          <Card.Text >
            {contenido}
          </Card.Text>
          <Card.Text style={{ whitespace: `pre-wrap` }}>
            
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