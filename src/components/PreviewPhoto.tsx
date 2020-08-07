import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { IPhoto } from '../interfaces';
import './PreviewPhoto.css'

type Preview = {
    open(): void,
    photo: IPhoto,
    photos: IPhoto[],
}

export const PreviewPhoto: React.FC<Preview> = ({ open, photo, photos }) => {

    const [show, setShow] = useState(true);
    const [numberOfPhoto, setNumber] = useState<number>(photos.findIndex(item => item.id === photo.id))


 

    const handleClose = () => {
        setShow(false)
        open()
    };

    const ChangePhoto=(val:number)=>{
       
        if(numberOfPhoto+val===-1){
            setNumber(photos.length-1);
            return
        }
        if(numberOfPhoto+val===photos.length){
            setNumber(0);
            return
        }
        setNumber(numberOfPhoto+val)
     
    }

    return (
        <>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Картинка:)</Modal.Title>
                </Modal.Header>


                <img src={photos[numberOfPhoto].url} className='previewedPhoto'/>

                <Modal.Footer>
                    <svg viewBox="0 0 14 18" className="prev" width='20px' height='20px' onClick={()=>ChangePhoto(-1)} ><path d="M.827.086A.537.537 0 0 0 0 .538v16.206c0 .425.47.682.827.453l12.618-8.104a.538.538 0 0 0 0-.905z"></path></svg>
                    <p className='photoLength'>{numberOfPhoto + 1}/{photos.length}</p>
                    <svg viewBox="0 0 14 18" className="next" width='20px' height='20px' onClick={()=>ChangePhoto(1)}><path d="M.827.086A.537.537 0 0 0 0 .538v16.206c0 .425.47.682.827.453l12.618-8.104a.538.538 0 0 0 0-.905z"></path></svg>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>



                </Modal.Footer>

            </Modal>

        </>
    )
}