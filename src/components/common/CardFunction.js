import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import React from "react";
const CardFunction = props => {
  return (
    <>
      <div>
        {props.data.map((post, i) => {
          return (
            <div key={i}>
              <CardDeck>
                <Card bg="primary" text="white" style={{ width: "18rem" }}>
                  <Card.Header>{post.title} </Card.Header>
                  <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
                    <Card.Text>{post.body}</Card.Text>
                    <button
                      style={{ marginBottom: 20 }}
                      className="btn btn-primary add-course"
                      onClick={() => props.onClick()}
                    >
                      stop
                    </button>
                  </Card.Body>
                </Card>
              </CardDeck>
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardFunction;
