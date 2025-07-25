import React from 'react';
import logo from '../assets/netflix_logo.png';
import './MyHeader.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import avatar from '../assets/avatar.png'

// const MyHeader = function() {
//     return (
//             <header className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center px-2 py-3 bg-dark w-100">
//       {/* Parte sinistra navbar */}
//       <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3 w-100">
//         <img
//           src={logo}
//           alt="logo"
//           className="logo mb-2 mb-md-0"
//         />
//         <nav className="overflow-auto w-100">
//           <ul className="d-flex flex-wrap flex-md-nowrap align-items-center list-unstyled gap-2 fs-6 p-0 m-0">
//             <li><a href="#" className="text-light text-nowrap">Home</a></li>
//             <li><a href="#" className="text-light text-nowrap">TV Show</a></li>
//             <li><a href="#" className="text-light text-nowrap">Movies</a></li>
//             <li><a href="#" className="text-light text-nowrap">Recent added</a></li>
//             <li><a href="#" className="text-light text-nowrap">My list</a></li>
//           </ul>
//         </nav>
//       </div>

//       {/* Parte destra navbar */}
//       <div className="nav-right d-flex align-items-center gap-3 mt-3 mt-md-0">
//         <i className="fas fa-search text-light"></i>
//         <p className="text-light d-none d-sm-block m-0">Kids</p>
//         <i className="fas fa-bell text-light"></i>
//         <a href="#">
//           <img
//             src={profileIcon}
//             alt="Profile"
//             className="profile"
//           />
//         </a>
//         <i className="fas fa-caret-down text-light"></i>
//       </div>
//     </header>
//     )
// }

const MyHeader = function () {
  return (
    <Navbar expand="lg" className="bg-body-dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="logo"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='custom-toggle'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='text-light'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-light'>TV Show</Nav.Link>
            <Nav.Link href="#link" className='text-light'>Movies</Nav.Link>
            <Nav.Link href="#link" className='text-light'>Recent Added</Nav.Link>
            <Nav.Link href="#link" className='text-light'>My List</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* parte destra */}
             <div className="d-none d-lg-flex align-items-center gap-3">
          <i className="fas fa-search text-light"></i>
          <p className="text-light m-0 d-none d-xl-block">Kids</p>
          <i className="fas fa-bell text-light"></i>
          <a href="#">
            <img
              src={avatar}
              alt="Profile"
              className="rounded-circle"
              height="50"
            />
          </a>
          <i className="fas fa-caret-down text-light"></i>
        </div>

      </Container>
    </Navbar>
  );
};


export default MyHeader