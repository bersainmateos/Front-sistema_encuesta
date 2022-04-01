import react from "react";

/**IMPORTANDO LOS COMPONENTES DE FRON END */
import Login from "./componentes/Loggin"
import Cards from "./componentes/Cards";
import Logout from "./componentes/Logout";
import Registrar_encuestador from "./componentes/Registrar_encuestador";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
/***FIN DE LA IMPORTACIÓN DE COMPONENTES */

import { Cookies } from 'react-cookie';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/**IMPORTANDO LOS ESTILOS CSS  */
import "./componentes/styles/bootstrap.css"
import "./componentes/styles/estilos_propios.css"
import Modal_insertar_pregunta from "./componentes/Modals/Modal_insertar_pregunta";
import Listar_preguntas from "./componentes/Alta_preguntas/Listar_preguntas";


function App() {
  const cookie = new Cookies();
    return (
      /**HACEMOS EL ROUTER PARA GESTIONAR EL COMPORTAMIENTO DE LA APLICACIÓN */
      < Router>
          <Switch>
          <Route path="/Home">
            <Header user={cookie.get('usuario')} />
            <Cards/>
          </Route>
          <Route path="/Alta-de-pregunta">
            <Header user={cookie.get('usuario')} />
            <Listar_preguntas/>
          </Route>
          
          <Route exact path="/Registrar_encuestador">
            <Header user={cookie.get('usuario')} />
            <Registrar_encuestador/>
          </Route>
          
          <Route exact path="/">
            <Login/>
            <Footer/>
          </Route>

          <Route exact path="/Logout">
            <Logout/>
          </Route>
        
        </Switch>

      </Router>
    );
  }

export default App;