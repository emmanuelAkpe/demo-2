import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../Rating'

const Dc = ({dc}) => {
  return (
    <Card style={{marginTop:'20px'}} className='my-3 p-3 rounded'>
        <Link to={`/desktop/${dc._id}`}>
        <Card.Img src={dc.image} variant='top'/>
        </Link>

        <Link to={`/desktop/${dc._id}`}>
        <Card.Body>
            <Card.Title as='div'><strong>{dc.name}</strong></Card.Title>
            <Card.Text><Rating value={dc.rating} text={`${dc.numReview} reviews`}/> </Card.Text>
            <Card.Text><span style={{color:'teal', width:'14px'}}>GH¢</span> {dc.price}</Card.Text>

        </Card.Body>
        </Link>


    </Card>
  )
}

export default Dc