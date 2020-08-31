import React from 'react'
import './Navbar.css'
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import { AudioPlayer } from './AudioPlayer';



const Navbar: React.FC = () => {


  return (
<>
    <Nav activeKey="/home" >
     
      <Nav.Item >
        <Nav.Link eventKey="link-1" ><NavLink to='/'>Квесты</NavLink></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" ><NavLink to='/photos'>Фотографии</NavLink></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3"><NavLink to='/music'>Музыка</NavLink></Nav.Link>
      </Nav.Item>
      <AudioPlayer />
    </Nav>
   
</>
  )

}

export default Navbar

