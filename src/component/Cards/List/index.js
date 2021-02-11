import { useSelector } from 'react-redux'
import Block from './Block/index'
import './style.scss'
import {cards, total} from '../../../store/selectors'
import Totalblock from './Total'
import { useState } from 'react'
const List = ()=>{
  const card = useSelector(cards)
  const totals = useSelector(total)
  const [toggleModal, setToggleModal] = useState(false)
  const totalAmount = card.reduce((num, item) => num + +item.price * item.totalprice, 0);
  const checkedModal = () => {
    setToggleModal(!toggleModal)
  }
  return(
    <div className='row'>
     {toggleModal && <div className='totalBlock'>
        {totals.length > 0?totals.map((elem)=>(
        <Totalblock
        key={elem.id} 
        id={elem.id} 
        anun={elem.title}
        gin={elem.price}   
        totalprice={elem.totalprice}
        />))
        :<h1 className='noitems'>NO PRODUCTS ARE SELECTED</h1>
      }
      </div>
    }
      <div className='total' onClick={checkedModal}>TTL:{totalAmount}$</div>
        {card.map((elem)=>(
    <Block 
      key={elem.id} 
      id={elem.id} 
      title={elem.title} 
      body={elem.body} 
      src={elem.src} 
      button={elem.button} 
      pointerEvents={elem.pointerEvents} 
      price={elem.price}  
      totalprice={elem.totalprice}
    />
      ))}
    </div>
    
  )
}
export default List; 