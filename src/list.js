import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletedata } from "./todomethod/todomethod";

const ListData = ({ searchdata, handleOpenModal, handleViewOpenModal }) => { 
    const data = useSelector(state => state.todo.todoData);
    const dispatch = useDispatch();

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchdata.toLowerCase()) || 
        item.email.toLowerCase().includes(searchdata.toLowerCase())
    );

    const handledelete = (id) => {
        dispatch(deletedata(id));
    }

    return (
        <div>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact No</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contactNo}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={(e) => handleOpenModal(item)}>Edit</button>
                                </td>
                                <td>
                                    <button className="btn btn-primary" onClick={(e) => handledelete(item.id)}>Delete</button>
                                </td>
                                <td>
                                    <button className="btn btn-primary" onClick={(e) => handleViewOpenModal(item)}>View</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ListData;
