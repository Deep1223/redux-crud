import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addMethod, editdata } from "./todomethod/todomethod";

const AddModal = ({ modalopen, handleclosemodal, selecteddata }) => {
    const dispatch = useDispatch();

    const [id, setid] = useState('');
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [contactNo, setcontactNo] = useState('');

    useEffect(() => {
        if (modalopen) { // Reset state when modal opens
            setid('');
            setname('');
            setemail('');
            setcontactNo('');
        }

        if (selecteddata) {
            setid(selecteddata.id || '');
            setname(selecteddata.name || '');
            setemail(selecteddata.email || '');
            setcontactNo(selecteddata.contactNo || '');
        }
    }, [modalopen, selecteddata]); // Depend on modalopen and selecteddata

    const savedata = () => {
        const newdata = { id: id || new Date().getTime(), name: name, email: email, contactNo: contactNo };

        if (selecteddata && selecteddata.id) {
            dispatch(editdata(newdata));
        } else {
            dispatch(addMethod(newdata));
        }

        // Optionally reset state here as well, but it's already done above
        handleclosemodal();
    }

    return (
        <div>
            <div className={`modal fade ${modalopen ? 'show d-block' : ''}`} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <input type="hidden" value={id} />
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={(e) => setname(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setemail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contactNo">Contact No</label>
                                    <input type="text" className="form-control" id="contactNo" placeholder="Enter Contact No" value={contactNo} onChange={(e) => setcontactNo(e.target.value)} />
                                </div>
                                <div className="d-flex justify-content-right gap-2 mt-3">
                                    <button type="button" className="btn btn-secondary" onClick={handleclosemodal}>Close</button>
                                    <button type="button" className="btn btn-primary" onClick={savedata}>Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddModal;
