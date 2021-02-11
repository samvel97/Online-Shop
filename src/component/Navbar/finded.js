import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

const Finded = ({id, src, title, price, body})=>{
  const dispatch = useDispatch()
  const history = useHistory()

  const infoRoute = ()=>{
    dispatch({type:'INFO_ROUTE', id, src, price, title, body}) 
        history.push({pathname:'/infopage'})
  }
  return(
    <div onClick={()=>infoRoute(id, src, price, title, body)} className='findedBlock'>
      <img src={src} width="30" height="35" alt="watch"/>
      <h5>{title}:</h5>
      <h5>${price}</h5>
    </div>
  )
}

export default Finded;