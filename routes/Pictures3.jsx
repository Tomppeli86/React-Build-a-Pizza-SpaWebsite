import * as React from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from 'react';


export default function Pictures() {
  const [stuff, setStuff] = useState( [  ] )




  const hook = () => {
    axios
      .get('http://localhost:3001/stuff')
      .then(response => {
        console.log('promise fulfilled')
        setStuff(response.data)
        console.log(response.data)
     })  
  }
  useEffect(hook, [])



  return (

    <div>
          
          <div className="chosenfillings">
       
              
                <p>Fillit'</p>

                {stuff.map((fill) => (
                <li key={fill.id}>
                {console.log(fill.name)} <img src={"/kuvat/"+ fill.name +".png"} className="chosenfillings"/>
                <br></br>
                
                </li>))}

              
          </div>

          
             

                <img src="/kuvat/pizza.png" className="bigpic"/>  
             
             <p class="pictxt"> <Link to="/Koti" class="linktxt">Back</Link>
            </p> 

              
    </div>

  );
}
