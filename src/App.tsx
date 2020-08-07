import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { TodosPage } from './pages/TodosPage';
import { Photo } from './pages/PhotoPage';
import { MusicPage } from './pages/MusicPage';


const App: React.FC = () => {
  return (
    
    <BrowserRouter>

    <Navbar />
    <div className="container">
     <Switch>
       <Route component={TodosPage} path='/' exact /> 
       <Route component={Photo} path='/photos' />
       <Route component={MusicPage} path='/music' />
     </Switch>
    </div>

  </BrowserRouter>
  );
}

export default App;
