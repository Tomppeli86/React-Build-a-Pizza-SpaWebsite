import * as React from 'react';
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';

export default function Tarina() {
  
  return (
    <div>
        <img src="/kuvat/testikuva3.png" className="bigpic2" />
      <main class="boxtxt">
          
          
          <div class="txtbackround">
          <p class="infotxt2">Write here. <br></br> And here comes more text.</p>
          <p class="infotxt2">Write more here. asdasd
          Like this like this like this like this and
          this like this like this like this but no 
          more than this and this and this or
          you will break box this this this this.
          </p>
          </div>
          
          <div>
            <Link to="/Pictures" class="infotxt3">Mr.Person
            </Link>
          
            <Link to="/Pictures2" class="infotxt3">Mrs.Person
            </Link>
          </div>
        

      </main>
        
    </div>
  );
}
