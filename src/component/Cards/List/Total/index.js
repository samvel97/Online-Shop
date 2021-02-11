import '../Total/style.scss'
const Totalblock = ({id, anun, gin, totalprice})=>{
  return(
    <div className='Total'>
      <div className='totalItems'>{`${anun}`}</div>
      <div className='totalItems'>{`${gin} x ${totalprice}`}</div>
      <div className='totalItems'>{`totalPrice:${gin * totalprice}`}</div>
      <button type='button'>X</button>
    </div>
  )
}

export default Totalblock;