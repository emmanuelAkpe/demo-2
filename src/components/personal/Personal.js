import React from 'react'
import './personal.css'
import { Row, Col} from 'react-bootstrap'
import { personalComputers } from '../../data/personalComputers'
import Pc from './Pc'

const Personal = () => {
  return (
    <div className='personal-computers'>
      <Row className='mx-3 '>
      {
        personalComputers.map((pc)=>{
          return(
                <Col sm={12} md={4} lg={3} xl={3} key={pc._id} >
                   <Pc pc={pc} />
               </Col>
          )
        })
      }
      </Row>
    </div>
  )
}

export default Personal