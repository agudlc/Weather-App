import { Link } from 'react-router-dom';
import Logo  from "../img/logoHenry.png";
import SearchBar from "./SearchBar";
import styles from "./Nav.module.css"

function Nav({onSearch}) {
  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
      <Link to='/'>
        <span className={styles.brand}>
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Henry - Weather App
        </span>
      </Link>
      <Link to='/about'>
        <span>About</span>
      </Link>
      </div>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;