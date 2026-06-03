import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        StudentApp
      </Link>
      <ul className="nav-links">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>

        {user ? (
          <>
            <li className="user-name">👤 {user.name}</li>
            <li>
              <Link className="nav-link" to="/students">
                Students
              </Link>
            </li>

            <li>
              <Link className="nav-link" to="/addstudent">
                Add Student
              </Link>
            </li>

            <li>
              <button onClick={logout} className="logout-btn">
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>

            <li>
              <Link className="register-btn" to="/register">
                Register
              </Link>
            </li>
          </>
        )}
        <button onClick={toggleTheme} className="theme-btn">
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
