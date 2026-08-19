import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">

        <Link
          className="navbar-brand fw-bold"
          to="/"
        >
          🤖 AI Model Manager
        </Link>

        <div className="navbar-nav ms-auto align-items-center">

          <Link
            className="nav-link px-3"
            to="/"
          >
            Dashboard
          </Link>

          <Link
            className="nav-link px-3"
            to="/models"
          >
            Models
          </Link>

          <Link
            className="btn btn-primary ms-2"
            to="/add-model"
          >
            + Add Model
          </Link>

        </div>

      </div>
    </nav>
  )
}

export default Navbar