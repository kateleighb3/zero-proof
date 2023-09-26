import React from "react";

const Modal = ({open, onClose}) => {
    if (!open) return null
    return (
    <div className='overlay border-4 border-white'>
        <div className="modalContainer p-4 text-black font-bold">
            <p onClick={onClose} className="closeBtn cursor-pointer">X</p>
            <div className="content">
            YOLO
            </div>
        </div>
        
    </div>
    )
}

export default Modal