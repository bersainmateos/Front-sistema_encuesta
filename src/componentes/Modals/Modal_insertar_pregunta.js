import React from 'react';


function Modal_insertar_pregunta(){
    return (
        <div class="modal fade addpregunta" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog  modal-sm modal-lg">
          <div class="modal-content">
            <div class="modal-header unach">
              <h2 style="color: white;" class="text-center" >AGREGAR PREGUNTA<button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button></h2>
            </div> 
            <div class="modal-body"> 
              <hr/>
                <div class="form-group">
                   <div class="form-group">
                      <input type="text" class="form-control" autocomplete="off" id="pregunta"/>
                </div>
                </div>
               
            </div><br/><br/>
            <div class="modal-footer" id="footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                <button type="submit" data-dismiss="modal" class="btn btn-success" id="pinsert">Agregar</button>
            </div>
          </div>
        </div>
    </div>
    );
}

export default Modal_insertar_pregunta;