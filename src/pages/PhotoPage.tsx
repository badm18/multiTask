import React, { useState, useEffect, Fragment } from 'react'
import './Photos.css'
import { AddPhoto } from '../components/AddPhoto'
import { IPhoto } from '../interfaces';
import { PreviewPhoto } from '../components/PreviewPhoto';

export const Photo: React.FC = () => {




    const [photos, setPhotos] = useState<IPhoto[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [PhotoInfo, setPhotoInfo] = useState<IPhoto>(photos[0])



    //функция которая добавляет url картинки в массив photos
    const addPhoto = (url: string) => {
        const newPhoto: IPhoto = {
            url: url,
            id: Date.now()
        }
        if (url != '') {
            setPhotos(prev => [...prev, newPhoto])
        }
    }

    const handleModal = () => {
        setShowModal(!showModal)
    }



    useEffect(() => {

        const saved = JSON.parse(localStorage.getItem('photos') || '[]')
        setPhotos(saved)
    }, [])

    useEffect(() => {

        localStorage.setItem('photos', JSON.stringify(photos))
    }, [photos])







    return (
        <>

            <div className='addPhotoBtn'>
                <AddPhoto addPhoto={addPhoto} />
            </div>

            <div className="gallery">

                {photos.map(item =>
                    <div className="img-item" key={item.id}>


                        <img src={item.url} alt="" className="img" onClick={() => {
                            setPhotoInfo(item)
                            setShowModal(!showModal);
                        }} />
                    </div>
                )}

                <Fragment>
                    {showModal && <PreviewPhoto open={handleModal} photo={PhotoInfo} photos={photos} />}
                </Fragment>
            </div>
        </>
    )
}


