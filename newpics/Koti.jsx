import * as React from 'react';
import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios'


export default function Koti() {


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



  const addStuff = (event)  => {
    event.preventDefault()

    let filling = event.target.className
    const numberId = Number.parseInt(stuff.length + 1)
    const newFilling = {name: filling, id: parseInt(numberId)}
    let existingFilling = stuff.filter(filling => filling.name === newFilling.name)[0]
    let existingId = stuff.filter(filling => filling.id === newFilling.id)[0]
    console.log(numberId)
    console.log(event.target.className)

      if (existingFilling) { 
        console.log(newFilling.id)
        console.log(existingFilling.id)
        const arr = stuff.filter((item) => item.name !== filling);
          setStuff(arr);
          console.log(arr)
      
          axios
          .delete('http://localhost:3001/stuff/'+(existingFilling.id))
          .then(response => {
            console.log(response) 
            { 
            axios
              .get('http://localhost:3001/stuff')
              .then(response => {
                console.log('promise fulfilled')
                setStuff(response.data)
              }) 
            }
          })
        return 
      }

      if (existingId) {
        console.log("Duplicate id")
        newFilling.id = (stuff.lenght + 1)
      }
      
        axios
          .post('http://localhost:3001/stuff',newFilling)
          .then(response => { 
          console.log(response.data)
          setStuff(stuff.concat(newFilling))
        })

    console.log(stuff)
    console.log(stuff.length)
  }




  return (
    
    <div>
      
      <img src="/kuvat/testikuva3.png" className="bigpic2" />
      <main class="boxtxt">

          <div class="txtbackround">
          <Link to="/Pictures3" class="linktxt">FILL IT WITH!.
   
          </Link>
            <p class="infotxt2">Choose stuff. <br></br> Stuff stuff.</p>

            <img src="/kuvat/tomato.png" name="tomato" onClick={addStuff} className="tomato"/>

            <img src="/kuvat/onion.png" name="onion" onClick={addStuff} className="onion"/>

            <img src="/kuvat/basilika.png" name="basilika" onClick={addStuff} className="basilika"/>

  
            <ol> 
                  <p>Fillit'</p>
              {stuff.map((fill) => (
                <li key={fill.id}>
                {fill.name}
                <br></br> </li>))}
              </ol>



          </div>
          

      </main>
        
    </div>
  );
}
