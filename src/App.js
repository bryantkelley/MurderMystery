import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';

function App() {
  const [card, setCard] = useState('_____');
  const [dice, setDice] = useState('_____');
  const [spinner, setSpinner] = useState('_____');

  const people = ['robbie', 'jess', 'ali', 'marissa', 'mel', 'katie', 'zap', 'tact'];
  const weapons = ['candlestick', 'revolver', 'rope', 'wrench', 'lead pipe', 'dagger'];
  const locations = [
    'study',
    'library',
    'conservatory',
    'hall',
    'kitchen',
    'ballroom',
    'dining room',
    'lounge',
    'billiard room',
  ];

  return (
    <Container className="App display-flex justify-content-center align-items-center">
      <Row className="pt-5">
        <Col>
          <Button
            variant="primary"
            onClick={() => {
              setCard(people[Math.floor(Math.random() * people.length)]);
            }}
          >Pick A Card</Button>
        </Col>
        <Col>
          <Button
            variant="success"
            onClick={() => {
              setDice(locations[Math.floor(Math.random() * locations.length)]);
            }}
          >Roll Dice</Button>
        </Col>
        <Col>
          <Button
            variant="warning"
            onClick={() => {
              setSpinner(weapons[Math.floor(Math.random() * weapons.length)]);
            }}
          >Spin Wheel</Button>
        </Col>
        <Col>
          <Button
            variant="danger"
            onClick={() => {
              setCard('_____');
              setDice('_____');
              setSpinner('_____');
            }}
          >Reset Game</Button>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col>
          <h1>It was <Badge variant="primary">{card}</Badge>,</h1>
          <h1>in the <Badge variant="success">{dice}</Badge>,</h1>
          <h1>with the <Badge variant="warning">{spinner}</Badge>.</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
