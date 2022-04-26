import React, {useEffect,useState} from 'react';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

const Crud_pregunta = () => {

  const [data, setData] = useState([{}]);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);


  const ordenarAsc=(p_array_json, p_key) => {
    p_array_json.sort((a, b) => {
      return a[p_key] > b[p_key];
    });
  }

  useEffect(()=>{
    fetch('http://ec2-18-119-108-56.us-east-2.compute.amazonaws.com:8888/api/encuesta/listar/pregunta', { method: 'GET'}).then( respuesta =>
      respuesta.json()
    ).then(respuesta => {
        let data=respuesta.Respuesta;
        ordenarAsc(data, 'idpregunta');
         setData(data)
         console.log(data)
      })
  },[])

  const [preguntaSeleccionada, setpreguntaSeleccionada] = useState({
    idpregunta: '',
    nuevaPregunta: '',
    fechaCreacion: '',
    status:''
  });

  const seleccionarPregunta=(elemento, caso)=>{
      setpreguntaSeleccionada(elemento);
      (caso==='Editar')?setModalEditar(true):setModalEliminar(true)
  }

  const handleChange=e=>{
    const {name, value}=e.target;
    setpreguntaSeleccionada((prevState)=>({
      ...prevState,
      [name]: value
    }));
  }

  const editar=()=>{
    let valorInsertar={
          idpregunta:preguntaSeleccionada.idpregunta,
          pregunta:preguntaSeleccionada.nuevaPregunta
        }

    fetch('http://ec2-18-119-108-56.us-east-2.compute.amazonaws.com:8888/api/encuesta/actualizar/pregunta', { method: 'PUT', body: JSON.stringify(valorInsertar) }).then( respuesta =>
      respuesta.json()
     ).then(respuesta => {
        if(respuesta.Status){
          alertify.success('Se actualizo correctamente!')
          fetch('http://ec2-18-119-108-56.us-east-2.compute.amazonaws.com:8888/api/encuesta/listar/pregunta', { method: 'GET'}).then( respuesta =>
            respuesta.json()
          ).then(respuesta => {
            let data=respuesta.Respuesta;
            ordenarAsc(data, 'idpregunta');
            setData(data)
          })
          setModalEditar(false);
        }else{
          alert('Ocurrio un error');
        }
    })
    
  }

  const eliminar =()=>{
    let valorInsertar={
      idpregunta:preguntaSeleccionada.idpregunta,
      status:false
    }
    console.log(valorInsertar);
    fetch('http://ec2-18-119-108-56.us-east-2.compute.amazonaws.com:8888/api/encuesta/eliminar/pregunta', { method: 'DELETE', body: JSON.stringify(valorInsertar) }).then( respuesta =>
    respuesta.json()
  ).then(respuesta => {
      if(respuesta.Status){
        alertify.success('Se elimino correctamente!');
        fetch('http://ec2-18-119-108-56.us-east-2.compute.amazonaws.com:8888/api/encuesta/listar/pregunta', { method: 'GET'}).then( respuesta =>
          respuesta.json()
        ).then(respuesta => {
          let data=respuesta.Respuesta;
          ordenarAsc(data, 'idpregunta');
          setData(data)
        })
        setModalEliminar(false);
      }else{
        alert('Ocurrio un error');
      }
  })
  }

  const abrirModalInsertar=()=>{
    setpreguntaSeleccionada(null);
    setModalInsertar(true);
  }

  const insertar =()=>{

    if (preguntaSeleccionada.nuevaPregunta[0]!== String.fromCharCode(191)) {
      preguntaSeleccionada.nuevaPregunta='¿'+preguntaSeleccionada.nuevaPregunta;
    }

    if (preguntaSeleccionada.nuevaPregunta[((preguntaSeleccionada.nuevaPregunta.length)-1)] !== String.fromCharCode(63)) {
      preguntaSeleccionada.nuevaPregunta=preguntaSeleccionada.nuevaPregunta+'?';
    }


    let valorInsertar={
      pregunta:preguntaSeleccionada.nuevaPregunta
    }

    fetch('http://ec2-18-119-108-56.us-east-2.compute.amazonaws.com:8888/api/encuesta/agregar/pregunta', { method: 'POST', body: JSON.stringify(valorInsertar) }).then( respuesta =>
      respuesta.json()
    ).then(respuesta => {
        if(respuesta.Status){
          alertify.success('Se agregó correctamente!');
          fetch('http://ec2-18-119-108-56.us-east-2.compute.amazonaws.com:8888/api/encuesta/listar/pregunta', { method: 'GET'}).then( respuesta =>
            respuesta.json()
          ).then(respuesta => {
            let data=respuesta.Respuesta;
            ordenarAsc(data, 'idpregunta');
            setData(data)
          })
          setModalInsertar(false)
        }else{
          alert('Ocurrio un error');
        }
    })

  }


  const Pregunta=(props)=>{
    let lista=props.data.map(elemento=>{
      if(elemento.status===true){
       return( <tr>
          <td>{elemento.idpregunta}</td>
          <td>{elemento.nuevaPregunta}</td>
          <td><button className="btn btn-success btn-block Editar" onClick={()=>seleccionarPregunta(elemento, 'Editar')}>Editar</button> {"   "} </td>
          <td><button className="btn btn-danger btn-block Editar" onClick={()=>seleccionarPregunta(elemento, 'Eliminar')}>Eliminar</button></td>
      </tr>)
      }
    })
    return lista;
  }

  return (
    <div className="container col-sm-11">
    <button className="btn btn-success" onClick={()=>abrirModalInsertar()}>Insertar</button>
    <br /><br />
      <table className="table table-bordered table-hover no-footer dataTable">
        <thead className='unach-table' >
          <tr style={{color: 'white'}}>
            <th>ID</th>
            <th>PREGUNTA</th>
            <th colSpan="3"><center> Acciones </center> </th>
            
          </tr>
        </thead>
        <tbody>
          <Pregunta data={data}/>
        </tbody>
      </table>

      <Modal isOpen={modalEditar}>
        <ModalHeader className='unach'>
          <div>
            <h3 style={{color: 'white',textAlign: 'center'}}>Editar Pregunta</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="idpregunta"
              value={preguntaSeleccionada && preguntaSeleccionada.idpregunta}
            />
            <br />

            <label>Pregunta</label>
            <input
              className="form-control "
              type="text"
              name="nuevaPregunta"
              value={preguntaSeleccionada && preguntaSeleccionada.nuevaPregunta}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter id='footer'>
          <button className="btn btn-success" onClick={()=>editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás seguro que deseas eliminar la pregunta, {preguntaSeleccionada && preguntaSeleccionada.nuevaPregunta}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>eliminar()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>


        <Modal isOpen={modalInsertar}>
        <ModalHeader className='unach'>
          <div>
            <h3 style={{color: 'white'}}>Agregar nueva pregunta</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Pregunta</label>
            <input
              className="form-control"
              type="text"
              name="nuevaPregunta"
              value={preguntaSeleccionada ? preguntaSeleccionada.nuevaPregunta: ''}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter id='footer'>
          <button className="btn btn-success"
          onClick={()=>insertar()}>
            Insertar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalInsertar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Crud_pregunta;
