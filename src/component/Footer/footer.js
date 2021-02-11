import React from 'react'
import { Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image5 from '../../assets/imges/image5.jpg'

const Footer = ()=>{
  return(
    <Navbar bg="dark">
    <Navbar.Brand >
      <img
        src={Image5}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    </Navbar>
  )
}

export default Footer; 