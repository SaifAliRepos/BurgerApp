import { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Header = () => {
  const navigate = useNavigate();
  const { auth, authorizeUser } = useContext(UserContext);

  const handleClick = async (e) => {
    console.log(e.target.textContent === 'SignOut');
    if (e.target.textContent === 'SignOut') {
      console.log('Inside');
      navigate('/');
      authorizeUser(false);
    } else {
      navigate('/login');
    }
  };
  return (
    <Navbar
      data-bs-theme='dark'
      collapseOnSelect
      expand='lg'
      className='px-3 bg-brown'
    >
      <Navbar.Brand>
        {' '}
        <img
          alt=''
          src='https://www.svgrepo.com/download/115503/burger.svg'
          width='30'
          height='30'
          className='d-inline-block align-top'
        />{' '}
        BurgerK i n g
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='me-auto'>
          {auth && (
            <Nav.Link onClick={() => navigate('/my_orders')}>Orders</Nav.Link>
          )}
        </Nav>
        <Nav>
          <Nav.Link onClick={() => navigate('/')}>Burger Builder</Nav.Link>
          <Nav.Link onClick={(e) => handleClick(e)}>
            {auth ? 'SignOut' : 'Login'}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
