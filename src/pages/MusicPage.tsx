import React, { useState, useEffect } from 'react'
import './MusicPage.css'
import { AddSong } from '../components/AddSong'

export const MusicPage: React.FC = () => {

    const [songs, setSongs] = useState<any[]>([])



    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('songs') || '[]')
        setSongs(saved)
    }, [])
    
    useEffect(() => {
        localStorage.setItem('songs', JSON.stringify(songs))
    }, [songs])

  

    

    const addSong = (file: any) => {
       
        setSongs([...songs, file]);
    
        
       console.log(songs);
    }


    return (
        <>

            <div className="addSong">
                <AddSong addSong={addSong} />
            </div>


            <div className="songsContainer">

                <div className="songButton">
                    <svg viewBox="0 0 14 18" className="playButton" width='20px' height='20px'><path d="M.827.086A.537.537 0 0 0 0 .538v16.206c0 .425.47.682.827.453l12.618-8.104a.538.538 0 0 0 0-.905z"></path></svg>
                </div>
                <div className="songNSinger">
                    <p className='songsName'>Lorem, ipsum.</p>
                </div>
            </div>
        </>
    )
}

