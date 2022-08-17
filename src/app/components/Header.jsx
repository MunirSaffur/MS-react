import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import fiterProducts_ACT from '../actions/filterProducts_ACT';
import Form from 'react-bootstrap/Form';

const Header = () => {
  const ProductsData = useSelector(state => state.productsData);
  const dispatch = useDispatch()


  const handleSearch = (e) => {
    const searchString = e.target.value.toLowerCase();
    const result = searchString === "" ?
      null
      :
      ProductsData.filter(item => {
        return (
          item.title.toLowerCase().includes(searchString)
        )
      })
    dispatch(fiterProducts_ACT(result))
  }


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">ECOM-12</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
          </Nav>
        </Navbar.Collapse>
        <Form.Control className='mx-3' type="text" placeholder="Search for a product" onChange={(e) => { handleSearch(e) }} />
      </Container>
    </Navbar>
  );
}

export default Header;