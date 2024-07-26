import React, { useRef, useState } from "react"
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { LinkContainer } from "react-router-bootstrap"
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap"
import { IoCloseOutline } from "react-icons/io5"
import { v4 as uuidv4 } from "uuid"

import { navLinks } from "./../../config"
import { resetArticles } from "./../../redux/actions/articlesAction"
import "../navbar/nav.css";

function NavBar() {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [searchStr, setSearchStr] = useState("")

  const navigate = useNavigate()
  const navRef = useRef(null)
  const dispatch = useDispatch();

  const handleNavClick = () => {
    setIsCollapsed(true)
  }

  const handleNavigation = () => {
    dispatch(resetArticles())
  }

  const handleInputChange = (e) => {
    setSearchStr(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${searchStr}`)
    setSearchStr("");
    setIsCollapsed(true);
  }
  const isButtonDisabled = searchStr.trim() === ""

  return (
    <Navbar
      ref={navRef}
      className="navbar"
      variant="dark"
      expand="lg"
      fixed="top"
      expanded={!isCollapsed}
    >
      <Navbar.Brand className="nav-brand" href="/">
        News
      </Navbar.Brand>

      {isCollapsed && (
        <Navbar.Toggle
          className="border-0"
          aria-controls="basic-navbar-nav"
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
      )}

      {!isCollapsed && (
        <IoCloseOutline
          size={40}
          className="close-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
      )}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav mr-auto" onClick={handleNavClick}>
          {navLinks.map((navItem) => (
            <LinkContainer to={navItem.page} key={uuidv4()} onClick={handleNavigation}>
              <Nav.Link className="nav-item">{navItem.nav}</Nav.Link>
            </LinkContainer>
          ))}
        </Nav>
        <Form className="search-form" onSubmit={handleSubmit}>
          <FormControl
            type="text"
            placeholder="Explore news..."
            className="form-input form-control-lg mt-lg-2 mt-md-2 mt-sm-2 mt-xl-0"
            value={searchStr}
            onChange={handleInputChange}
          />
          <Button
            className="search-btn mt-lg-2 ml-2 mt-md-2 mt-sm-2 mt-xl-0"
            onClick={handleSubmit}
            disabled={isButtonDisabled}
          >
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    )
}

export default NavBar;