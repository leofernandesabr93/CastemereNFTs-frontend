import React from 'react'
import Search from '../search/Search'
import { useRef } from 'react';

const SearchModal = () => {

  const modalRef = useRef(null);

  const closeModal = () => {
    if (modalRef.current) {
      const modal = new bootstrap.Modal(modalRef.current);
      modal.hide();
    }
  };

  return (
    <div>
      <div className="modal fade" ref={modalRef} id="searchModal" tabIndex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

                <Search closeModal={closeModal}/>
                
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
       </div>
      </div>
  )
}

export default SearchModal