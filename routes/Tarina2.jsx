import * as React from 'react';
import { Outlet, Link } from "react-router-dom";

export default function Tarina2() {

  return (
    <div>

      <main class="boxtxt">
        
          <p class="infotxt">..A story..</p>
          <p class="infotxt2">..here. <br></br> And here comes more text.</p>
          <p class="infotxt2">Write more here.
          Write more here. asdasd
          asdasdasd  asdasd asdasd asdasdasd z asdasddas</p>
             
          <div class="kuvat" width="200px"> <br></br>
            
            <img src="/kuvat/testikuva.png" class="storykuva" />

            <Link to="/Pictures" class="infotxt3">Gallery
            </Link>
            
          </div>
      </main>
        
    </div>
  );
}