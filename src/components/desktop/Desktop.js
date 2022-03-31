import React from 'react'
import './desktop.css'
import { Row, Col} from 'react-bootstrap'
import { accessories } from '../../data/accessories'
import Dc from './Dc'

const Personal = () => {
  return (
    <div className='personal-computers'>
      <Row className='mx-3 '>
      {
        accessories.map((dc)=>{
          return(
                <Col sm={12} md={4} lg={3} xl={3} key={dc._id} >
                   <Dc dc={dc} />
               </Col>
          )
        })
      }
      </Row>
    </div>
  )
}

export default Personal