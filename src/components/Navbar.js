import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar--container">
    <nav className="navbar">
        <h1 className="header"><Link to="/">COUNTER APP</Link></h1>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/counter">COUNTER</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/404 - Not Found.">NOT FOUND</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
    </div>
  );
}