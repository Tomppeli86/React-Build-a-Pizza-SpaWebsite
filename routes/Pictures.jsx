import * as React from 'react';
import { Outlet, Link } from "react-router-dom";


export default function Pictures() {


  return (

    <div>
           <p class="pictxt">This is a Mr. Person, 36
         <br></br>Likes being a ball.<br></br>
         and other stuff.</p>
      
        <Link to="/Tarina" class="infotxt3">
          <img src="/kuvat/testikuva.png" className="bigpic"
            />     
        </Link>
       
    </div>

  );
}
