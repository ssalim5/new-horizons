import React from 'react'
import {connect} from 'react-redux'
import {Link,NavLink} from 'react-router-dom'
import {logout} from '../store'
import {Navbar,Nav,Container} from 'react-bootstrap'

const NavigationBar = ({handleClick, isLoggedIn, userId,}) => (
  isLoggedIn ? (
  <Navbar fixd="top" expand="sm" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>New Horizons</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/activities">Activities</Nav.Link>
            <Nav.Link as={NavLink} to="/graph">Graph</Nav.Link>
            <Nav.Link as={NavLink} to={`/users/${userId}`}>My Profile</Nav.Link>
            <Nav.Link onClick={handleClick}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  ):(<div/>)


  // <Nav>
  //   <h1>New Horizons</h1>
  //   <nav>
  //     {isLoggedIn ? (
  //       <div>
  //         {/* The navbar will show these links after you log in */}
  //         <Nav.Link as={NavLink} to="/">Home</Nav.Link>
  //         <Nav.Link as={NavLink} to="/activities">Activities</Nav.Link>
  //         <Nav.Link as={NavLink} to="/graph">Graph</Nav.Link>
  //         <Nav.Link as={NavLink} to={`/users/${userId}`}>My Profile</Nav.Link>
  //         <a href="#" onClick={handleClick}>
  //           Logout
  //         </a>
  //       </div>
  //     ) : (
  //       <div/>
  //     )}
  //   </nav>
  //   <hr />
  // </Nav>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id,
    userId: state.auth.id,
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(NavigationBar)

