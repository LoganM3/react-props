import React, {useState} from 'react';
import Menubar from './Components/Menubar';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css';

function App() {
  const [name,setName] = useState('Mason')
  return (
    <div className="App">
    
<Menubar name={name} setName ={setName}/>
<Main name={name}/>
<Footer/>

    </div>
  );
}

export default App;
