import React from 'react';
import './App.css';
import { NewNoteModal } from './components/NoteModal';
import {NotesTable} from "./components/NotesTable";

const App = () => {
  return (
    <div className="App">
      <h3>Seznam zákazníků</h3>
      
        <div style={{maxWidth:"70%", margin:"auto"}}>
          <div style={{textAlign:"right"}}>
                       
          </div>
          <NotesTable/>
        </div>  
        <NewNoteModal />   
        <h4 style={{fontSize:"15px",textAlign:"right",maxWidth:"70%",margin:"auto"}}>made by Jakub Josefus</h4>  
    </div>
  );
}

export default App;
