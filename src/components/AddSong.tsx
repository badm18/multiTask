import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import * as app from "firebase/app";
import 'firebase/storage';
import 'firebase/database'




export const AddSong: React.FC = () => {
    const [input, setInput] = useState<any>({})
    const [show, setShow] = useState(false);
    const [uploading, setUpload] = useState(0);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);



    const handleChange = (e: any) => {
        setInput(e.target.files[0]);
        console.log(e.target.files[0])


    }



    const sendFile = async () => {

        var uploadTask = app.storage().ref('/music/' + input.name).put(input);

        uploadTask.on(app.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function (snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUpload(progress)

            }, function (error: any) {

                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;

                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            }, async function () {
              await uploadTask.snapshot.ref.getDownloadURL().then(function(url){
                    app.database().ref().child('/music').push({
                        'url':url,
                        'name':input.name,
                    })
                })
                setUpload(0);
                setShow(false)
            }
        )

    }

    // const UploadFile = () => {
    //     addSong(input);

    //     setShow(false);

    // }

    return (

        <>

            <svg onClick={handleShow} id="plus-icon" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z" /></svg>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавьте файл {uploading != 0 ? 'Загрузка ' + Math.floor(uploading) + '%' : ''}</Modal.Title>
                </Modal.Header>
                <div className="upload-icon">

                    <div className="urlContainer">

                        <input type="file" name='file' className="fileInput" onChange={handleChange} />

                    </div>

                </div>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={sendFile}>
                        Save Changes
            </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}