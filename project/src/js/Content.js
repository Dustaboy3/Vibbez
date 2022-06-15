import '../css/Content.css';
import logo from '../img/logo.svg';

function root() {
    return (
        <div className="App-header">
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
                 Learn React
            </a>
        </div>
    );
}

export default root;