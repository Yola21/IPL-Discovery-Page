import React from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import SearchIcon from '@material-ui/icons/Search'
import { Link } from 'react-router-dom';


  function Navbar() {

    return (
        <nav className="navbar">
            <div className="navbarLogo">
                <Link to="/">
                    <img 
                        className="navbar__Logo"
                        src="https://cdn.freelogovectors.net/svg06/Indian-Premier-League-IPL-logo.svg" alt="IPL" 
                    />
                </Link>
            </div>
            <div className="navbarLinks">
                <Nav activeKey="1" className="navbar__Links">
                    <Nav.Item>
                        <Nav.Link eventKey="1" className="navbar__Title">
                            <Link to="/" className="navbar_Title_Link">
                                IPL T20
                            </Link>
                        </Nav.Link>
                    </Nav.Item>
                    

                    <Nav.Item>
                        <Nav.Link eventKey="2" className="navbar__Title">
                            <Link to="/players" className="navbar_Title_Link">
                                Players
                            </Link> 
                        </Nav.Link>
                    </Nav.Item>

                    <NavDropdown title="Seasons" id="nav-dropdown-2" className="navbar__Title">
                        <NavDropdown.Item eventKey="3.1" className="navbarDropdown">
                            2007
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="3.2" className="navbarDropdown">
                            2008
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="3.3" className="navbarDropdown">
                            2009
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="3.4" className="navbarDropdown">
                            2010
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="3.5" className="navbarDropdown">
                            2011
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="3.6" className="navbarDropdown">
                            2012
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="3.7" className="navbarDropdown">
                            2013
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="3.8" className="navbarDropdown">
                            2014
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="3.9" className="navbarDropdown">
                            2015
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="3.10" className="navbarDropdown">
                            2016
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="3.11" className="navbarDropdown">
                            2017
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="3.12" className="navbarDropdown">
                            2018
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="3.13" className="navbarDropdown">
                            2019
                        </NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Item>
                        <Nav.Link eventKey="4" className="navbar__Title">
                            Venues
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="5" className="navbar__Title">
                            More
                        </Nav.Link>
                    </Nav.Item>
                </Nav>       
            </div>
            <div className="navbarSearch">
                <SearchIcon />
                <input 
                    type="text" 
                    placeholder="Search player, team, venue" 
                />
            </div>
        </nav>
    )
}

export default Navbar;