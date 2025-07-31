import logo from '../assets/images/logo.svg';
import '../assets/styles/Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-img">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="#" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Menu</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Reservations</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Order Online</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Login</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;