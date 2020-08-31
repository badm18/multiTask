import React, {useContext } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { Context } from '../context';



export const AudioPlayer: React.FC = () => {

    const changeSong = useContext(Context)
    

    return (
       <>
            
            <ReactAudioPlayer
                src={changeSong.data.url}
                autoPlay={true}
                controls
                id='audioPlayer'
            />
        
       </>
    )
}