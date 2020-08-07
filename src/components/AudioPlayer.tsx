import React from 'react'
import ReactAudioPlayer from 'react-audio-player';


export const AudioPlayer: React.FC = () => {

    return (
       
        <ReactAudioPlayer
            // src="https://cdndl.zaycev.net/track/15960116/7NRogmXPkqv5buF9nsiiH8eb6ugAeXoNAiRFFNyVu8AeKiqBw1V8AB1wBmuKw2kaL4shfbfJpeXTqDgpeiJJTKH9sjPan2hMEvvDUYJrjEw1P7ukDphEgcanEDXwovBDUfFfZVqbnbmLYtd8fzAFNES9arVjFvfJJTrvSsEiZRXVPzdL7h4hdUbHyetCKoB65ryU66xvH8ZG4AATGqVrsqnrpfb1MSJCJhHfkT7z2bLsmribdHgLDzbfhhkf7VnT45D8aG79Xm1W4kgRFVxcWzNw1gdR2Hi1TusrgA33k6PwUMBajb9ftMGNDEgrMNuGWkvF2Z8xBFepk6XS7fG7m9hdMHbr8tjmDaoo8sGnG7wtjFFwSL7Q"
            autoPlay={true}
            controls
            id='audioPlayer'
        />
    )
}