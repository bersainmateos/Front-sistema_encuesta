import React, { useEffect,useState } from "react";
import { MDBDataTableV5 } from 'mdbreact';

/*
const Data_Pregunta=(props)=>{
    
    return (
        <tr>
            <td></td>
            <td>{props.pregunta}</td>
            <td><input id="Editar" value="Actualizar" type="button" data-id_pregunta="129" className="btn btn-success btn-block Editar" data-toggle="modal" data-target=".bd-example-modal-lg" /></td>
            <td><input id="Borrar" value="Borrar" type="button" data-id_pregunta="129" className="btn btn-danger btn-block Editar"/></td>    
        </tr>
    )
}
*/

function Listar_preguntas(){
/*
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch('http://ec2-18-118-31-164.us-east-2.compute.amazonaws.com:8888/api/encuesta/listar/pregunta', { method: 'GET'}).then( respuesta =>
            respuesta.json()
        ).then(respuesta => {
            setItems(respuesta.Respuesta)
        })
    },[])

    const Preguntas= items.map(element => 
        <Data_Pregunta key={element.idpregunta} pregunta={element.nuevaPregunta} />
    )*/

      return(  
        <div className="col-md-12 col-lg-12">
            <button className="btn btn-lg btn-primary" data-toggle="modal" data-target=".addpregunta" ><span style={{fontSize:'28px'}} className="glyphicon glyphicon-plus-sign"></span></button> <br/>
        <hr/>
	    <table id="encuestas" className='table table-bordered table-hover'>
		    <thead className="unach-table">
			    <tr style={{color: 'white'}}>
				    <th>#</th>
				    <th><center>PREGUNTA</center></th>
				    <th><center>Actualizar</center></th>
				    <th><center>Eliminar</center></th>
			    </tr>
		    </thead>
            <tbody>
               
            </tbody>
    	</table>
        </div>

    );
}

export default Listar_preguntas;