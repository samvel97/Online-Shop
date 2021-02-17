import { useDispatch, useSelector } from 'react-redux';
import {cards, total} from '../../../../store/selectors'
import '../Total/style.scss'
const Totalblock = ({id, anun, gin, totalprice})=>{
  const deleteItem = useSelector(total)
  const dispatch = useDispatch()
  const deleteFunction = ()=>{
    dispatch({type:'DELETE_FUNCTION', id})
  }

  return(
    <div className='Total'>
      <div className='totalItems'>{`${anun}`}</div>
      <div className='totalItems'>{`${gin} x ${totalprice}`}</div>
      <div className='totalItems'>{`totalPrice:${gin * totalprice}`}</div>
      <button type='button' onClick={deleteFunction}>X</button>
    </div>
  )
}

export default Totalblock;