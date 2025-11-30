import { AppProvider, AppContext } from './Context'
import ContainerFluid from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { useState, useEffect, useContext } from 'react';
import './App.css'

function TheMenu() {

  const [dates, setDates] = useState([])
  const [cnt, setCnt] = useState(0)

  const {
    services: {
      serviceApi
    }
  } = useContext(AppContext)

  useEffect(() => {
    serviceApi.getDates().then(data => {
      setDates(data)
    });
  }, []);

  const loadFolderIndex = (value) => {
    serviceApi.loadFolderIndex(value).then(data => {
      setCnt(data.cnt)
    })
  }

  return (
    <AppProvider>

      <Navbar expand="lg" className="navbar-expand-sm navbar-dark bg-secondary">
        <Form.Select className='my-form-select' onChange={(ev) => loadFolderIndex(ev.target.value)}>
          <option>File...</option>
          {dates.map(date => (
            <option key={date} value={date}>{date}</option>
          ))}
        </Form.Select>
        <Nav className="justify-content-end">
          <Nav.Link href="/folders">Folders</Nav.Link>
          <NavDropdown title="TTI" id="nav-dropdown">
            <NavDropdown.Item href="/ttipermin">ttipermin</NavDropdown.Item>
            <NavDropdown.Item href="/ttipermincateg">ttipermincateg</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">delay</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/tti">Tti</Nav.Link>
          <Nav.Link href="/test">Test</Nav.Link>
          <Nav.Item className="float-md-righ">{cnt} lines loaded</Nav.Item>
        </Nav>

      </Navbar>
    </AppProvider>
  )
}

export default TheMenu