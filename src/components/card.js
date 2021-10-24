import React from 'react';
import './card.css'
import { Container,ListGroupItem,Card,ListGroup, Row,Col,Button } from 'react-bootstrap';

const Customcard=(props)=> {
    return (
        <div>
         <Container className="card-package card-book-tour">

<Card className="card-container">
{/* <Card.Header className="package-name">{props.name}</Card.Header> */}
<Card.Img variant="top" className="card-image" src={props.image} />
<ListGroup variant="flush">
<ListGroup.Item className="pkg-include">{props.code} </ListGroup.Item>
<ListGroup.Item className="price-package tour-price">{props.price} <span><Button className="book-package">Details</Button></span></ListGroup.Item>

</ListGroup>
</Card>
</Container>

        </div>
    );
}

export default Customcard;