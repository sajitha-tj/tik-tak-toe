// import logo from './logo.svg';

import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>

      <div className="copyrights">
        <a href="http://sajithatj.tk">Created with ❤: Sajitha T. Jayawickrama.</a>
      </div>
    </div>
  );
}

export default App;
