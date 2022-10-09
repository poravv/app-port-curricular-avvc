import React from "react";
import { Button, Card } from "react-bootstrap";

function MyCardImg() {
  return (
    <>
      <Card className="card" style={{ margin: `100px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>

        <div className="" style={{width:`10rem`}}>
          <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
        </div>
        <Card.Body>
          <Card.Title>Titulo</Card.Title>
          <Card.Text className="card-text text-secondary">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
  
  /*return (
    <div style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
      <div className="e-card e-card-horizontal" style={{ width: `400px` }}>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Sample" style={{ height: `180px` }}/>
          <div className="e-card-stacked">
              <div className="e-card-header">
                  <div className="e-card-header-caption">
                      <div className="e-card-header-title">Philips Trimmer</div>
                  </div>
              </div>
              <div className="e-card-content">
                  Powered by the innovative DuraPower Technology which optimizes power consumption, Philips trimmers are designed to last longer
                  than 4 ordinary trimmers.
              </div>
          </div>
      </div>
    </div>
  );*/
}

export default MyCardImg;