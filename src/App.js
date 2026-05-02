import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {process.env.REACT_APP_KEY_APPNAME}
        </a>
        <h1>V ~ {process.env.REACT_APP_KEY_VERSION}</h1>
        <h2>Secret key ~ {process.env.REACT_APP_KEY_SECRETV}</h2>
      </header>
    </div>
  );
}

export default App;
