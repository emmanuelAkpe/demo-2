
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { accessories } from '../data/accessories'
import Rating from '../components/Rating'

const DesktopProduct = () => {

  const { id } = useParams()
  

    // {console.log(personalComputers)}

    const product = accessories.find((p) => p._id === parseInt(id))

    // console.log(product)


  return (
    <div>
      
     
    <Link className='btn btn-light my-3' to='/' >
      Go Back
    </Link>

    <Row>
      <Col md={6}>
        <Image src={product.image} alt={product.name} fluid></Image>
      </Col>
      <Col md={3}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h3>{product.name}</h3>
          </ListGroup.Item>

          <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReview} reviews`}/>
          </ListGroup.Item>

          <ListGroup.Item>
          Price:  <span style={{fontSize:'14px'}}> GH¢</span>{product.price}
        </ListGroup.Item>

        <ListGroup.Item>
          {product.description}
        </ListGroup.Item>
        </ListGroup>

      </Col>

      <Col md={3}>
        <Card>
          <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price: </Col>
                  <Col>
                    <strong>{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status: </Col>
                  <Col>
                    {product.inStock >0 ? 'In Stock':'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button className='btn-block' type='button' disabled={product.inStock===0}>
                  Add to Cart
                </Button>
              </ListGroup.Item>

          </ListGroup>
        </Card>
      </Col>

    </Row>
    </div>
  )
}

export default DesktopProduct