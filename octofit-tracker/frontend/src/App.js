
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      {/* Bootstrap Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">Octofit Tracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#">Activities</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Leaderboard</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Teams</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Users</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Workouts</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1 className="display-4 mb-4">Welcome to Octofit Tracker!</h1>
            <div className="card shadow p-4">
              <p className="lead">Track your activities, join teams, compete on the leaderboard, and get personalized workout suggestions.</p>
              <a href="#" className="btn btn-primary m-2">Get Started</a>
              <a href="#" className="btn btn-outline-secondary m-2">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
