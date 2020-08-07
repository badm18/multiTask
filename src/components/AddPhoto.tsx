import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import './AddPhoto.css'


type AddPhoto = {
    addPhoto(url: string): void
    
}




export const AddPhoto: React.FC<AddPhoto> = ({  addPhoto }) => {
    const [input, setInput] = useState<string>('')
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    
    const handleShow = () => setShow(true);



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        console.log(input)
    }


    const UploadFile = () => {

        addPhoto(input)
        setInput('');
        setShow(false);

    }

    return (

        <>

            <svg onClick={handleShow} id="plus-icon" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z" /></svg>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавьте url картинки</Modal.Title>
                </Modal.Header>
                <div className="upload-icon">

                    <div className="urlContainer">
                        <input type="text" className="urlInput" onChange={handleChange} />

                    </div>
                </div>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={UploadFile}>
                        Save Changes
            </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}