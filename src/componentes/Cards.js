import {Link} from "react-router-dom";

function Card(){
      return (
        <div>
    <div className="col-lg-10 container">
  <h2>
    SISTEMA DE RECOLECCIÓN DE INFORMACIÓN
  </h2>


  <div className="card-deck text-center top1">
    <Link style={{textDecoration: 'none'}} className="card manejador box-shadow" to="example">
      <div >
          <div className="card-header bg-info">
            <h4 className="font-weight-normal">Encuesta</h4>
           
          </div>
          <div className="card-body">
            <h5 className="card-title pricing-card-title text-muted">Creación de encuestas </h5>
          </div>
        </div>
    </Link>
    <Link style={{textDecoration: 'none'}} className="card manejador box-shadow" to="example">
        <div>
         <div className="card-header bg-info">
            <h4 className="my-0 font-weight-normal">Ver encuestas</h4>
          </div>
          <div className="card-body">
            <h5 className="card-title pricing-card-title text-muted">Ver todas las encuestas </h5>
          </div>
        </div>
    </Link>
    <Link style={{textDecoration: 'none'}} className="card manejador box-shadow" to="example">
        <div >
         <div className="card-header bg-info">
            <h4 className="my-0 font-weight-normal">Encuestadores</h4>
          </div>
          <div className="card-body">
            <h5 className="card-title pricing-card-title text-muted">Ver todos los encuestadores </h5>
          </div>
          </div>
    </Link>
    </div>

    <div className="card-deck text-center" >
    <Link style={{textDecoration: 'none'}} className="card manejador box-shadow" to="/Alta-de-pregunta">
        <div>
          <div className="card-header bg-info">
            <h4 className="my-0 font-weight-normal">Alta de Preguntas</h4>
          </div>
          <div className="card-body">
            <h5 className="card-title pricing-card-title text-muted">Dar de alta a las preguntas</h5>
          </div>
        </div>
      </Link>
      <Link style={{textDecoration: 'none'}} className="card manejador box-shadow" to="example">
         <div >
         <div className="card-header bg-info">
            <h4 className="my-0 font-weight-normal">Alta de Respuestas</h4>
          </div>
          <div className="card-body">
            <h5 className="card-title pricing-card-title text-muted">Dar de alta a las respuestas </h5>
          </div>
        </div>
      </Link>
      </div>
    <div className="card-deck text-center">

    <Link style={{textDecoration: 'none'}} className="card manejador box-shadow" to="example">
         <div>
         <div className="card-header bg-info">
            <h4 className="my-0 font-weight-normal">Crear catálogo de Preguntas</h4>
          </div>
          <div className="card-body">
            <h5 className="card-title pricing-card-title text-muted">Creación de los cátalogos de preguntas </h5>
          </div>
        </div>
    </Link>
    <Link style={{textDecoration: 'none'}} className="card manejador box-shadow" to="example">
        <div>
         <div className="card-header bg-info">
            <h4 className="my-0 font-weight-normal">Crear catálogo de Respuestas</h4>
          </div>
          <div className="card-body">
            <h5 className="card-title pricing-card-title text-muted">Creación de los cátalogos de respuestas </h5>
          </div>
        </div>
      </Link>
      </div>
       <div className="card-deck text-center">
       <Link style={{textDecoration: 'none'}} className="card manejador box-shadow" to="example">
         <div>
         <div className="card-header bg-info">
            <h4 className="my-0 font-weight-normal">Editar Catálogo de Pregunta</h4>
          </div>
          <div className="card-body">
            <h5 className="card-title pricing-card-title text-muted">Editar los cátalogos de preguntas </h5>
          </div>
        </div>
        </Link>
        <Link style={{textDecoration: 'none'}} className="card manejador box-shadow" to="example">
        <div >
         <div className="card-header bg-info">
            <h4 className="my-0 font-weight-normal">Editar Catálogo de Respuestas</h4>
          </div>
          <div className="card-body">
            <h5 className="card-title pricing-card-title text-muted">Editar los cátalogos de respuestas </h5>
          </div>
        </div>
        </Link>
      </div>
      
      </div>
      </div>
    );
}

export default Card;