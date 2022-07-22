import { Link } from "react-router-dom";
const Navbar = () => {
  
    return (   
    <nav className="navbar">
        <h1>the Dojo Blog</h1>
            <div>
                <Link to="/">home</Link>
                <Link to="/create">new Blog</Link>
            </div>
    </nav>  
 );
}
 
export default Navbar;