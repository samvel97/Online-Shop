import './style.scss'
const CardInfo = ({id, src, price, title, body})=>{

  return(
    <>
    <div className='documentation'>
      <div className='title'>
      <h2>{title}</h2>
      <h3>${price}</h3>
      </div>
      <div className='info'>
      <img src={src} alt='Mywatch' width="400" height="410" className='image'/>
      <p>{body}</p>
      </div>
    </div>
    </>
  )
}

export default CardInfo;