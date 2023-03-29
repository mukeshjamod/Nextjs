import classes from './Header.module.css';
import Link from 'next/link';
const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>My Products</Link>
          </li>
          <li>
            <Link href='/'>My Sales</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
