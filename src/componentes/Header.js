import { Cookies } from 'react-cookie';
import {Link} from "react-router-dom";

function Header(props){
  const cookie = new Cookies();

  if(!cookie.get('usuario')){
    window.location='./';
  }
    return(
        <div>
        <div className="d-flex flex-column flex-md-row align-items-center p-3  unach fixed-top">
        <Link to="/Home" className="navbar-brand inicio"> <span className="glyphicon glyphicon-home"></span><b> INICIO</b> </Link>
      <nav className="my-2 my-md-0 mr-md-3">
         <Link to="/Registrar_encuestador" className="navbar-brand tam"> <span className="glyphicon glyphicon-user"></span><b> REGISTRO ENCUESTADOR</b> </Link>
      </nav>
      <a className="p-2 text-dark navbar-brand tam"  href="./Logout"><span className="glyphicon glyphicon-log-in"></span><b> SALIR</b></a>
    </div>

  <div className="container top">
        <div align="right"><span className="glyphicon glyphicon-home banner">
        <b className="banner">Bienvenido(a): </b> </span><b className="banner">{props.user}</b></div>
    </div>
    </div>

    );

}

export default Header;