import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <p>Navbar Components is the First Components</p>
            <nav className=''>                                  
                {/* Link tag use korle page reload ney na ata anchore tag er better version*/}
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
        </div>
    );
};

export default Header;