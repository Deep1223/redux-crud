import React, { useState } from "react";
import AddModal from "./addmodal";
import ListData from "./list";
import ViewModal from "./viewmodal";

const Todo = () => {
    const [modalopen, setModalopen] = useState(false);
    const [searchdata, setsearchdata] = useState('');
    const [selecteddata, setselecteddata] = useState({});
    const [viewmodalopen, setViewModalopen] = useState(false);

    const handleOpenModal = (handleedit = {}) => {
        setselecteddata(handleedit);
        setModalopen(true);
    };

    const handleclosemodal = () => {
        setModalopen(false);
    };

    const handleViewOpenModal = (handleedit = {}) => {
        setselecteddata(handleedit);
        setViewModalopen(true);
    }

    const handleviewclosemodal = () => {
        setViewModalopen(false);
    }
    
    return (
        <div>
            <div className="data-add-div mt-3">
                <button className="btn btn-primary" onClick={handleOpenModal}>Add New</button>
                <input type="search" placeholder="Search..." onChange={(e) => setsearchdata(e.target.value)}/>
            </div>

            <AddModal
                modalopen={modalopen}
                handleclosemodal={handleclosemodal}
                selecteddata={selecteddata}
            />

            <ListData
                searchdata= {searchdata}
                handleOpenModal= {handleOpenModal}
                handleViewOpenModal= {handleViewOpenModal}
            />

            <ViewModal 
                viewmodalopen = {viewmodalopen}
                selecteddata={selecteddata}
                handleviewclosemodal={handleviewclosemodal}
            />
        </div>
    );
};

export default Todo;
