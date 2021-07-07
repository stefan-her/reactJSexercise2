import './App.css';
import Compteur from './components/compteur';

function App() {
  return (
    <div className="App">
      <Compteur inc={1} />
    </div>
  );
}

export default App;
