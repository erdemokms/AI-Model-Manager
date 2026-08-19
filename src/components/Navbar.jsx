import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="app-navbar">

      <div className="navbar-container">

        {/* Logo */}
        <Link
          to="/"
          className="navbar-brand"
        >
          <div className="brand-mark">
            AI
          </div>

          <div className="brand-text">
            <strong>AI Model</strong>
            <span>Manager</span>
          </div>
        </Link>

        {/* Navigation */}
        <div className="navbar-links">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `navbar-link ${
                isActive ? 'active' : ''
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/models"
            className={({ isActive }) =>
              `navbar-link ${
                isActive ? 'active' : ''
              }`
            }
          >
            Models
          </NavLink>

          <Link
            to="/add-model"
            className="navbar-add-button"
          >
            <span>+</span>
            Add Model
          </Link>

        </div>

      </div>

    </nav>
  )
}

export default Navbar