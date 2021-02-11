import React from 'react'
import { Card, Button, ButtonGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss'
import { useDispatch, } from 'react-redux';
import { getTotalClick } from '../../../../store/actions';
import { useHistory } from 'react-router-dom';

const Block = ({id, title, body, src, button, pointerEvents, price, totalprice})=>{
  const  dispatch = useDispatch()
 
  const handleClick = ()=>{  
  dispatch(getTotalClick(id, pointerEvents, totalprice, title, price))
  }
  const handlechangeQuantede = (status)=>{
    dispatch({type:'CHANGE_QUANTED', id, status})
  }
  const history = useHistory()

  const infoRoute = ()=>{
    dispatch({type:'INFO_ROUTE', id, src, price, title, body}) 
        history.push({pathname:'/infopage'})
  }

  return(
      <Card style={{ width: '18rem' }} className='col-md-4'>
       <div className='priceing'> 
        <h3 className='price'>{price}$</h3>
        <ButtonGroup>
          <Button disabled={!pointerEvents} onClick={()=>handlechangeQuantede('+')}>+</Button>
          {totalprice}
          <Button disabled={!pointerEvents} onClick={()=>handlechangeQuantede('-')}>-</Button>
        </ButtonGroup>
        </div>
        <Card.Img variant="top" src={src} onClick={()=>infoRoute(id, src, price, title, body)}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {body}
          </Card.Text>
          <Button type='button' variant={pointerEvents?'success':'primary' }  onClick={handleClick}>
            {pointerEvents?'clear':button}
          </Button>
        </Card.Body>
      </Card>
  )
}

export default Block;