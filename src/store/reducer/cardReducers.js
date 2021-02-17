import {nanoid} from 'nanoid'
import Watch from '../../assets/imges/watch.jpg'
import { TOTALCLICK } from '../actionType'

const initialState = {
  card:[
    {id:nanoid(),  src:Watch, price:375, title:'Rolex', body:'About', button:'add to busket', pointerEvents:false, totalprice:0, clearTotal:false,},
    {id:nanoid(),  src:Watch, price:800, title:'Vacheron Constantin', body:'About', button:'add to busket', pointerEvents:false, totalprice:0, clearTotal:false,},
    {id:nanoid(),  src:Watch, price:250, title:'Cartier', body:'About', button:'add to busket', pointerEvents:false, totalprice:0, clearTotal:false,},
    {id:nanoid(),  src:Watch, price:150, title:'Harry Winston', body:'About', button:'add to busket', pointerEvents:false, totalprice:0, clearTotal:false,},
    {id:nanoid(),  src:Watch, price:630, title:'Rolex', body:'About', button:'add to busket', pointerEvents:false, totalprice:0, clearTotal:false,},
    {id:nanoid(),  src:Watch, price:410, title:'Longines', body:'About', button:'add to busket',pointerEvents:false, totalprice:0, clearTotal:false,},
    {id:nanoid(),  src:Watch, price:410, title:'Omega', body:'About', button:'add to busket',pointerEvents:false, totalprice:0, clearTotal:false,},
    {id:nanoid(),  src:Watch, price:410, title:'Rolex', body:'About', button:'add to busket',pointerEvents:false, totalprice:0, clearTotal:false,},
    {id:nanoid(),  src:Watch, price:410, title:'Patek Philippe', body:'About', button:'add to busket',pointerEvents:false, totalprice:0, clearTotal:false,}
  ],
  infoPage:{
    id:null,
    src:null,
    price:null,
    title:null,
    body:null,
  }
}
// eslint-disable-next-line 
export default(state=initialState,action={})=>{
  switch(action.type){
    case TOTALCLICK:{
      if(!action.pointerEvents) {
        const Adding = state.card
        .map((elem)=>(
          {
          ...elem,
          pointerEvents:elem.id === action.id ? !elem.pointerEvents: elem.pointerEvents,
          totalprice:elem.id === action.id ? action.totalprice + 1 : elem.totalprice
        })
        )
      return  {...state, card:Adding};
        
      } else {
        const Adding = state.card
        .map((elem)=>(
          {
          ...elem,
          pointerEvents:elem.id === action.id ? !elem.pointerEvents: elem.pointerEvents,
          totalprice:elem.id === action.id ? 0 : elem.totalprice
        })
        )

      return  {...state, card:Adding}
       
      }
    }
    case 'CHANGE_QUANTED':{
      if(action.status === '+'){
        const changesElement = state.card.map((elem)=>(
          {
            ...elem,
            totalprice:action.id=== elem.id?elem.totalprice + 1:elem.totalprice
          }
        ))
        return {...state, card:changesElement}
      }
      else if(action.status === '-') {
        const changesElement = state.card.map((elem)=>(
          {
            ...elem,
            totalprice:action.id=== elem.id?elem.totalprice - 1:elem.totalprice
          }
          ))
          return {...state, card:changesElement}
      }
    }
    case 'INFO_ROUTE':{
      const documentatin = 
        {
          id:action.id,
          src:action.src,
          price:action.price,
          title:action.title,
          body:action.body
        }
        console.log(documentatin);
      return {...state, infoPage:documentatin}
    }
    case 'DELETE_FUNCTION':{
      const deleting = state.card
        .map((elem)=>(
          {
          ...elem,
          pointerEvents:elem.id === action.id ? !elem.pointerEvents: elem.pointerEvents,
          totalprice:elem.id === action.id ? 0: elem.totalprice,
        })
        )
        return {...state, card:deleting}
    }
  default :return state
}
}