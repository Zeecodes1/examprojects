import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home--container">
      <h2>Welcome to Counter Page</h2>
      <p><Link to="/counter">Counter Page</Link></p>
    </div>
  );
}