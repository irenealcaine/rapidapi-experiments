import { Link } from "react-router-dom";
import { navbarItems } from "../../Utils/Constants";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      {navbarItems.map((navbarItem) => (
        <Link
          key={navbarItem.slug}
          to={`/${navbarItem.slug}`}
          className={`navigation-item ${
            location.pathname === `/${navbarItem.slug}` && "active"
          }`}
        >
          <h2>{navbarItem.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Home;
