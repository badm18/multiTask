import React from 'react'
import { ISong } from './interfaces'


export const Context = React.createContext<any>({
    data: {
        url: 'aaa',
        name: 'aaa',
    },
    setCurrentSong: () => { }
})