import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        color: 'white',
      }}
    >
      <h2>
        <NavLink
          to="/"
          style={{
            display: 'flex',
            color: 'black',
          }}
        >
          AtDrive
        </NavLink>
      </h2>

      <h3
        style={{
          display: 'flex',
          gap: '20px',
          color: 'black',
        }}
      >
        <NavLink
          to="/product"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          Product
        </NavLink>

        <NavLink
          to="/order"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          Order
        </NavLink>

        <NavLink
          to="/login"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          Login
        </NavLink>

        <NavLink
          to="/register"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          Register
        </NavLink>
      </h3>
    </nav>
  );
}

export default Navbar;
