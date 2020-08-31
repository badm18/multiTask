import React, { useState, useEffect, useContext } from 'react'
import './MusicPage.css'
import { AddSong } from '../components/AddSong'
import * as app from "firebase/app";
import { Context } from '../context';


export const MusicPage: React.FC = () => {

    const [songs, setSongs] = useState<any[]>([])

    let context = useContext(Context)


    useEffect(() => {
        app.database().ref().child('/music').once('value').then((snapshot) => {

            snapshot.forEach(item => setSongs(prev=>[...prev, item.val()]))
        })
    }, [])


    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('songs') || '[]')
        setSongs(saved)
    }, [])









    return (

        <>


            <div className="addSong">
                <AddSong />
            </div>
            
            {songs.map(item =>

                <div className="songsContainer">
                    <div className="songButton" onClick={() => context.setCurrentSong(item)} >
                        <svg viewBox="0 0 14 18" className="playButton" width='20px' height='20px'  ><path d="M.827.086A.537.537 0 0 0 0 .538v16.206c0 .425.47.682.827.453l12.618-8.104a.538.538 0 0 0 0-.905z"></path></svg>
                    </div>
                    <div className="songNSinger">
                        <p className='songsName'>{item.name}</p>
                    </div>
                </div>
            )}

        </>
    )
}

