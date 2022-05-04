import * as React from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios'
import { useRef, useState, useEffect } from 'react';
import DraggableComponent from '../DraggableComponent';

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

                <DraggableComponent/>









                

              
          </div>

          
             

                <img src="/kuvat/pizza.png" className="bigpic"/>  
             
             <p class="pictxt"> <Link to="/Koti" class="linktxt">Back</Link>
            </p> 

              
    </div>

  );
}
