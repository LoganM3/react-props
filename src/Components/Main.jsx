import React from "react";
import StudentCard from "./StudentCard";

const student ={
    name: "Khali Gopaul",
    age: 37,
    id: 'r63j42',
    term: 'Su22'
}

 function Main({name}){
     return(
        <main>
            <h1>Howdy {name || 'Guest'}</h1>
           {name &&<StudentCard student={student}/>}
        </main>
    )
}

export default Main;