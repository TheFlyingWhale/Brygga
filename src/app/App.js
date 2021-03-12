import logo from '../common/images/logoWhite.svg'
import './App.scss';

const App = () => {
    return(
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>Brygga</h1>
                <h2>Mat</h2>
                <p>The beginning of their offical web-site</p>
            </header>
        </div>
    );
}

export default App;
