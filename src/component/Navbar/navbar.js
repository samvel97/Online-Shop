import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss'
import { useSelector } from 'react-redux';
import {cards} from '../../store/selectors'
import Finded from './finded'
const Menu = ()=>{
  const card = useSelector(cards)
  const [search, setSearch] = useState([])
  const [val, setVal] = useState('')

  const HandleChnge = (e)=>{
    const {value} = e.target
    setVal(value)
    const finded = card.filter((elem)=>elem.title.startsWith(value))
    return setSearch(finded);
  }

  return(
    <>
    {
      HandleChnge && val.length > 0?
<Navbar bg="dark" variant="dark">
    <Link to='/'>Shop time</Link>
    <Nav className="mr-auto">
      <Link to='/'>Home</Link>
      <Link to='/Collection'>Collection</Link>
    </Nav>
    <Form inline>
      <div className='search'>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={val} onChange={HandleChnge} />
          <div className='allFindedBlocks'>
          {search.map((elem)=>
          <Finded 
              key={elem.key} 
              id={elem.id} 
              src={elem.src} 
              price={elem.price} 
              title={elem.title}
              body={elem.body}
          />)}
          </div>
      </div>
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>:
  <Navbar bg="dark" variant="dark">
    <Link to='/'>Shop time</Link>
    <Nav className="mr-auto">
      <Link to='/'>Home</Link>
      <Link to='/Collection'>Collection</Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" value={val} onChange={HandleChnge}/>
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    }
</>
  )

}

export default Menu;