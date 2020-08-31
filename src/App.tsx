import React, { useState } from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { TodosPage } from './pages/TodosPage';
import { Photo } from './pages/PhotoPage';
import { MusicPage } from './pages/MusicPage';
import * as app from "firebase/app";
import 'firebase/storage';
import { ISong } from './interfaces';
import { Context } from './context';



var firebaseConfig = {
  apiKey: "AIzaSyAa9vJp0GWrMul3r-MEhcq8eoeAjBnZuZY",
  authDomain: "multitask-510cc.firebaseapp.com",
  databaseURL: "https://multitask-510cc.firebaseio.com",
  projectId: "multitask-510cc",
  storageBucket: "multitask-510cc.appspot.com",
  messagingSenderId: "289535349232",
  appId: "1:289535349232:web:a313ab3b5f4dc411ef0d35",
  measurementId: "G-8G3HCRYEZK"
};



app.initializeApp(firebaseConfig);

const App: React.FC = () => {
 
//сохраняется песня которую нужно выбрать на странице со списком песен, чтобы в дальнейшем через context
//можно было передать данные о песне в плеер 
  const [songToPlay, setCurrentSong] = useState<ISong>({
    url: '',
    name: '',
  }) 



  return (

    <BrowserRouter>
    {/* context provider оборачивает все дочерние элементы  */}
      <Context.Provider value={{
        data:songToPlay,
        setCurrentSong
      }}>

        <Navbar />

      <div className="container">
        <Switch>
          <Route component={TodosPage} path='/' exact />
          <Route component={Photo} path='/photos' />
          <Route component={MusicPage} path='/music' />
        </Switch>
      </div>

      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
