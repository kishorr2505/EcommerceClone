
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll create this CSS file next

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-logo">
            <ul className="navbar-links">
                <li> <Link to="/">Shopi</Link></li>
                <li><Link to="/">All</Link></li>
                <li><Link to="/products">Clothes</Link></li>
                <li><Link to="/cart">Electronics</Link></li>
                <li><Link to="#">Furnitures</Link></li>
                <li><Link to="#">toys</Link></li>
            </ul>
        </div>
        <div>
            <ul className='navbar-right'>
                <li>userintheapp@test.com</li>
                <li>My Orders</li>
                <li>My Account</li>
                <li> 
                <img src="https://cdn-icons-png.flaticon.com/512/833/833314.png"alt="Cart" width="24" height="24"/></li>
            </ul>

        </div>        
    </nav>
  );
};

export default Navbar;
