import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../Rating'

const Pc = ({pc}) => {
  return (
    <Card style={{marginTop:'20px'}} className='my-3 p-3 rounded'>
      <Link to={`/pc/${pc._id}`}>
        <Card.Img src={pc.image} variant='top'/>
      </Link>
      <Link to={`/pc/${pc._id}`}>
        <Card.Body>
            <Card.Title as='div'><strong>{pc.name}</strong></Card.Title>
            <Card.Text ><Rating value={pc.rating} text={`${pc.numReview} reviews`}/> </Card.Text>
            <Card.Text><span style={{color:'teal', width:'14px'}}>GH¢</span> {pc.price}</Card.Text>


        </Card.Body>
      </Link>


    </Card>
  )
}

export default Pc