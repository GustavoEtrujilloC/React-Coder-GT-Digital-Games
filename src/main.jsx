import ReactDOM from 'react-dom/client'
import '../reset.css';
import './assets/Components/NavBar/NavBar.css';
import './assets/Components/CartWidget/CartWidget.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '/src/assets/Components/NavBar/NavBar';
import ItemListContainer from './assets/Components/ItemListContainer/ItemListContainer';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <NavBar />
    <ItemListContainer greeting='Tienda de VideoJuegos digitales para PlyaStation 4 y PlaStation 5' />
  </>,
)
