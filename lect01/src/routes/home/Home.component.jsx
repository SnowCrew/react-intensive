import { Link } from "react-router-dom";
import "./Home.styles.css";

const Home = () => {
  return (
    <div className="starting-page">
      <h1 className="welcome-text">Welcome, Traveler!</h1>

      <Link className="home-link" to="/form">
        Try form
      </Link>
    </div>
  );
};

export default Home;
