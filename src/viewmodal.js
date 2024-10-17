import React from "react";

const ViewModal = ({ viewmodalopen, handleviewclosemodal, selecteddata }) => {

    return (
        <div>
            <div className={`modal fade ${viewmodalopen ? 'show d-block' : ''}`} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <span>{selecteddata.name}</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <span>{selecteddata.email}</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="contactNo">Contact No</label>
                                <span>{selecteddata.contactNo}</span>
                            </div>
                            <div className="d-flex justify-content-right gap-2 mt-3">
                                <button type="button" className="btn btn-secondary" onClick={handleviewclosemodal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewModal;
