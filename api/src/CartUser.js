import React from 'react'
import {Card,Spinner,ListGroup,ListGroupItem} from 'react-bootstrap'

const CartUser = ({user,load}) => {
    return (
        <div>
            {load ? <Spinner animation="border" />:<Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWPT18DLARd7MTr_EMfyszJNj8h-itSNaTfw&usqp=CAU" />
                     <Card.Body>
                      <Card.Title>{user.name}</Card.Title>
                      <Card.Text>
                                 {user.username}
                        </Card.Text>
                     </Card.Body>
                     <ListGroup className="list-group-flush">
                     <ListGroupItem>{user.address.city}</ListGroupItem>
                     <ListGroupItem>{user.company.name}</ListGroupItem>
                     <ListGroupItem>{user.phone}</ListGroupItem>
                    </ListGroup>
                    </Card>      }
            
        </div>
    )
}

export default CartUser
