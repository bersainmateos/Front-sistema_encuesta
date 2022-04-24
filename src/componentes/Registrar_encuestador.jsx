

const Registrar_encuestador = () => {

    return (
        <div className="container">
        <h2 className="text-info">REGISTRO DE ENCUESTADORES</h2>
        <div className="form-group">
                <input type="text" className="form-control" placeholder="Rfc" />
        </div>
        <div className="form-group">
                <input type="text" className="form-control" placeholder="Nombre" />
        </div>
        <div className="form-group">
                <input type="text" className="form-control" placeholder="Apellido Paterno" />
        </div>
        <div className="form-group">
                <input type="text" className="form-control" placeholder="Apellido Materno" />
        </div>
            <div className="form-group">
                <select className="form-control">
                    <option value="0">Seleccione</option>
                    <option value="MASCULINO">MASCULINO</option>
                    <option  value="FEMENINO">FEMENINO</option>
                    <option value="INDEFINIDO">INDEFINIDO</option>
                </select>
        </div>
        <div className="form-group">
                <input type="phone"  className="form-control" placeholder="Teléfono" />
        </div>
        <div className="form-group">
                <input type="email" className="form-control" placeholder="Correo" />
        </div>
        <button className="btn btn-success btn-block" id="registro_alumno">Guardar</button>
    </div>
    );

}

export default Registrar_encuestador;