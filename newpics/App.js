import { Outlet, Link } from "react-router-dom";


export default function App() {

  return (
    <html lang="en">

      <div>


        <div class="mainsize">
        <Link to="/Koti" class="linktxt">Make a margarita!</Link> {" "} 


          <div class="box">
          
              <Outlet/>
          </div> 
          

            <div>
                  <br></br><br></br><br></br>
                <span>
                <a href="#" class="fa fa-twitter"></a>
                </span>
                <span>
                <a href="#" class="fa fa-facebook"></a>
                </span>
                <span>
                <a href="#" class="fa fa-instagram"></a>
                </span>
                <span>
                <a href="#" class="fa fa-youtube"></a>
                </span>
            </div>

        </div>

      </div>

    </html>
   
  );
}
