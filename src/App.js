import React, {useState} from 'react';
import Menubar from './Components/Menubar';
import Main from './Components/Main';
import Coffee from './Components/Coffee';
import Footer from './Components/Footer';
import './App.css';


function App() {
  const [name,setName] = useState('Mason')
  return (
    <div className="App">
    
<Menubar name={name} setName ={setName}/>
<Main name={name}/>
<Coffee />
<Footer/>

    </div>
  );
}

export default App;
