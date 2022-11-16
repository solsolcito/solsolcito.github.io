import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom'

function Home (){
    return(
        <div className="App">
        <div className="card">
          <img src="otro.jpg" className="sol" alt="..." />
          <div className="card-body">
            <h2 className="fst-italic">Solange Alarcón Melinao</h2>
            <br />
            <h5 className="card-title">Mi Perfil</h5>
            <p className="card-text">Hola! soy Sol, Me gusta Mucho la naturaleza,
              los animalas y el arte   .</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
             <Link to='/Cv'>Mi Curriculum</Link>
            </li>
            <li className="list-group-item">
             <Link to='/retratos'> Mis Retratos</Link>
              </li>
            <li className="list-group-item">
              <a href=''>Sobre Mi</a>
              </li>
          </ul>
        </div>
  
      </div>
    )
}
export default Home