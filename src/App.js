import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card">
        <img src="mifoto.pg.jpg" className="sol" alt="..." />
        <div className="card-body">
          <h1>Solange Alarcón Melinao</h1>
          <h5 className="card-title">Mi Perfil</h5>
          <p className="card-text">hola.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>

    </div>
  );
}

export default App;
