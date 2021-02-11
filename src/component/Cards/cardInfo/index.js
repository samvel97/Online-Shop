import { useSelector } from "react-redux";
import {info} from '../../../store/selectors'
import CardInfo from "./cardinfo";
const CardInfoList = ()=>{
  const infopage = useSelector(info)
  console.log(infopage, 'tratata');
  return(
    <>
      <CardInfo 
        key={infopage.id} 
        id={infopage.id} 
        src={infopage.src} 
        price={infopage.price} 
        title={infopage.title}
        body={infopage.body}
      />
    </>
  )
}

export default CardInfoList;