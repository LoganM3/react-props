import react from "react";

function Menubar({name, setName,student}){
    return (
        <nav style={{display:'flex', flexDirection: 'row',
        justifyContent: 'space-between'}}>
           <span>menu bar</span>
          {name
            ?<button onClick={()=> {setName(null) && student(null)}}>Logout</button>
            :<button onClick={()=> {setName('Logan') && student()
        }}>Login</button>
          }
        </nav>


    )
}


export default Menubar;