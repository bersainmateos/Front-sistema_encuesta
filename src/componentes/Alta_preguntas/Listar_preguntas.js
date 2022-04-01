import React from "react";

const data = async function Pregunta() {
    var respuesta = await fetch('http://ec2-18-118-31-164.us-east-2.compute.amazonaws.com:8888/api/encuesta/listar/pregunta', { method: 'GET'});
    return respuesta.json();
}

function Listar_preguntas(){
    
    
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
            {
                            data().then(e=>{
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                </tr>
                            })
            }
        </tbody>
	</table>
</div>
    );
}


export default Listar_preguntas;