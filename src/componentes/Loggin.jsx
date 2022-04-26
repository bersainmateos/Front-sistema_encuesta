import { useState } from 'react'
import { Cookies } from 'react-cookie';

 const loginUser = async (credentials) => {
  return fetch('http://http://ec2-18-119-108-56.us-east-2.compute.amazonaws.com:8888/api/encuesta/login', {
            method: 'POST',
            body: JSON.stringify(credentials)
          }).then(data => data.json())
 }

const  Login = () => {
  
  const cookie = new Cookies();

  if(cookie.get('usuario')){
    window.location='/Home';
  }
  const [correo, setEmail] = useState();
  const [contrasena, setPassword] = useState();

  const handleSubmit=async event=>{
    event.preventDefault();
    const data = await loginUser({
      correo,
      contrasena
    });

    if(data.Respuesta.status){
      const cookie = new Cookies();
      cookie.set('usuario', data.Respuesta.Data,{path: '/'});
      console.log(cookie.get('usuario'));
      window.location="/Home";
    }else{
      alert("Correo y/ó contraseña son incorrectos");
    }
    
  }

  return (
    <div>
    <div className="d-flex flex-column flex-md-row align-items-center p-4 border-bottom unach"> </div>
    <div  className="modal-dialog col-md-12" > 
      <div className="modal-content " >
        <div className="modal-header">
          <h2><font size="6" color="#741086"> <i className="glyphicon glyphicon-log-in"></i> Acceso </font></h2>  
        </div>
      <div className="modal-body col-md-12">
        <div className="row " >
          <div className="col-md-6">
              <div className="well">
              <form onSubmit={handleSubmit}> 
                <div className="form-group">
                  <label for="matricula">Correo</label>
                  <input type="text" className="form-control"  required onChange={e => setEmail(e.target.value)} name="matricula" placeholder="Correo " />
                </div>
              <div className="form-group">
                <label for="password">Contraseña</label>
                <input type="password" className="form-control" required onChange={e => setPassword(e.target.value)} name="password" placeholder="Contraseña" />
              </div>
            <div className="checkbox">
            <label><input type="checkbox" name="recordar" value="Si" /> Recordarme </label>
            </div>    
            <button type="submit" className="btn btn-success btn-block">Log In</button>  
            </form>
              </div>
          </div>
                <div className="col-md-6">
                  <b >Información</b>
                  <ul className="list-unstyled" >
                    <li><span className="fa fa-check text-success"></span><b><font size="3" color="#741086">El acceso </font></b> 
                      <div align="justify">a esta página es únicamente para la administración del contenido del Sistema de Información de 
                        Recolección de Información.
                      </div>
                    </li>   
                  </ul>
                </div>
            </div>
          </div>
       </div>
      </div>
  </div>
  );
}

export default Login;