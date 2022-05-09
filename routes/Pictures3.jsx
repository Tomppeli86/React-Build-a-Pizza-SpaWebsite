import * as React from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios'
import { useRef, useState, useEffect, useCallback } from 'react';


export default function Pictures3() {
  
  const [stuff, setStuff] = useState( [  ] )

  
  const orderPizza = []


  const hook = () => {
    axios
      .get('http://localhost:3001/stuff')
      .then(response => {
        console.log('promise fulfilled')
        setStuff(response.data)

     })  
  }
  useEffect(hook, [])




  const quickAndDirtyStyle = {
    width: "50px",
    height: "50px",
    background: "#FF9900",
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  

  

  const id = (x) => x;

  const useDraggable = ({ onDrag = id } = {}) => {
    const [pressed, setPressed] = useState(false);
    const position = useRef({ x: 0, y: 0 });
    const ref = useRef();
    const handleMouseDown = useCallback((e) => {
      e.target.style.userSelect = "none";
      setPressed(true);
    }, []);
  
    useEffect(() => {
      if (!pressed) {
        
        return;
      }
      const handleMouseMove = (event) => {
        if (!ref.current || !position.current) {
          return;
        }
        const pos = position.current;
        const elem = ref.current;
        position.current = onDrag({
          x: pos.x + event.movementX,
          y: pos.y + event.movementY
        });
        elem.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      };
      const handleMouseUp = (e) => {
        e.target.style.userSelect = "auto";
        setPressed(false);
      };
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {


        setIt(position.current, ref)
        
        
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }, [pressed, onDrag]);
    return [ref, pressed, handleMouseDown];
  };
  






  const setIt = (posfill, namefill) => {
    
    const newPosition = {name: namefill, position: posfill}
    let existingFilling = orderPizza.filter(filling => filling.name === newPosition.name)[0]

    console.log(namefill)
    console.log(posfill)
  

    if (existingFilling) {
        
        console.log(newPosition)
        orderPizza.filter((item) => item.name !== namefill)
        orderPizza.push(newPosition)
        console.log(orderPizza)
      
    } else {

        orderPizza.push(newPosition)
        console.log(orderPizza)

      }
}
  
  
  
  const DraggableComponent = (props) => {

    const handleDrag = useCallback(
      ({ x, y }) => ({
        x: Math.max(-200, x),
        
        y: Math.max(-500, y)
      }),
      []
    );
  
    const [ref, pressed, handleMouseDown] = useDraggable({
      onDrag: handleDrag 
    });

    

    return (
      <div className="draggables">

            <img src={"/kuvat/"+ props.aines +".png"} className={props.aines}
              ref={ref} onMouseDown={handleMouseDown} style={quickAndDirtyStyle}/> 
      </div>
    );
  };
  
  

  return (

    <div>
          
          <div className="chosenfillings">

                <div>
                 {stuff.map((fill) => ( 
                          <DraggableComponent aines={fill.name}/>
                        ))}
                {stuff.map((fill) => ( 
                          <DraggableComponent aines={fill.name}/>
                        ))}
                {stuff.map((fill) => ( 
                          <DraggableComponent aines={fill.name}/>
                        ))}
                    {console.log("dragged")}
                </div>
                  
                <div><Link to="/Pictures2"list={orderPizza} class="linktxt">Order</Link></div>
          </div>
          


          <img src="/kuvat/pizza.png" className="bigpic"/>  
             
            <p class="pictxt"> <Link to="/Koti" class="linktxt">Backza</Link> 
            </p> <br></br>
       
               
    </div>

  );
}

