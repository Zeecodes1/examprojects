import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home--container">
      <h1>Welcome to Counter Page</h1>
      <p><Link to="/counter">Counter Page</Link></p>
    </div>
  );
}