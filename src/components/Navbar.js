import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar--container">
    <nav className="navbar">
        <h1 className="navbar--logo"><Link to="/">COUNTER APP</Link></h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
    </div>
  );
}