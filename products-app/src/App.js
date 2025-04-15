import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Card, Container } from "react-bootstrap";
import Description from "./Components/Description";
import Image from "./Components/Image";
import Name from "./Components/Name";
import Price from "./Components/Price";

const firstName = "Switch Blade";

function App() {
  return (
    // Card component
    <Container className="my-5">
      <Card
        className="hover-card"
        style={{
          width: "30rem",
          margin: "0 auto",
        }}
      >
        <Card.Body>
          <Image />
          <Name />
          <Description />
          <Price />
        </Card.Body>
      </Card>

      {/*  Use of tenary operator to display firstName */}
      <div
        style={{
          marginTop: "20px",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </Container>
  );
}

export default App;
