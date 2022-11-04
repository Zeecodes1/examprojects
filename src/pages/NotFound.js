import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="error--container">
      <h1>404 - Not Found.</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}