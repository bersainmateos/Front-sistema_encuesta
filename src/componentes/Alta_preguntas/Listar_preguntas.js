import React, { useEffect,useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import DataTable from "react-data-table-component";
import Modal from "../Modals/Modal_insertar_pregunta";

function Listar_preguntas(){
    const [items, setItems] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(()=>{
        fetch('http://ec2-18-118-31-164.us-east-2.compute.amazonaws.com:8888/api/encuesta/listar/pregunta', { method: 'GET'}).then( respuesta =>
            respuesta.json()
        ).then(respuesta => {
            setItems(respuesta.Respuesta)
        })
    },[])

    const customStyles = {
        headRow: {
            style: {
                border: 'none',
            },
        },
        headCells: {
            style: {
                color: '#202124',
                fontSize: '14px',
            },
        },
        rows: {
            highlightOnHoverStyle: {
                backgroundColor: 'rgb(230, 244, 244)',
                borderBottomColor: '#FFFFFF',
                borderRadius: '25px',
                outline: '1px solid #FFFFFF',
            },
        }
    };
    const columnas=[
        {
            name: 'ID',
            selector: 'idpregunta',
            sortable:true
        },
        {
            name: 'PREGUNTA',
            selector: 'nuevaPregunta',
            sortable:true
        },
        {
            name:'Action',
            cell: () => <input id="Editar" value="Actualizar" type="button" data-id_pregunta="129" className="btn btn-success btn-block Editar" data-toggle="modal" data-target=".bd-example-modal-lg" />,
            sortable:true
        },
        {
            cell: () => <input id="Borrar" value="Borrar" type="button" data-id_pregunta="129" className="btn btn-danger btn-block Editar"/>,
            sortable:true
        }
    ]

      return(
            
        <div className="col-md-12 col-lg-12">
                  {modalOpen && <Modal setOpenModal={setModalOpen} />}  
            <button className="btn btn-lg btn-primary" data-toggle="modal" data-target=".addpregunta" ><span style={{fontSize:'28px'}} className="glyphicon glyphicon-plus-sign"></span></button> <br/>
        <hr/>


        <div className="App">
      <h1>Hey, click on the button to open the modal.</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>


    </div>

      
        </div>

    );
}

export default Listar_preguntas;