
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll create this CSS file next

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Shopi</Link>
        <ul className="navbar-links">
            <li><Link to="/">All</Link></li>
            <li><Link to="/products">Clothes</Link></li>
            <li><Link to="/cart">Electronics</Link></li>
            <li><Link to="#">Furnitures</Link></li>
            <li><Link to="#">toys</Link></li>
        </ul>
        </div>
    </nav>
  );
};

export default Navbar;
