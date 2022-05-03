import { Outlet, Link } from "react-router-dom";


export default function App() {



  return (
    <html lang="en">

      <div>


        <div class="mainsize">
          
            <nav class="navigation">
              <Link to="/Koti"  class="linktxt">Pizza</Link> {" "}

             
              
            </nav><br></br>

          <div class="box">

              <Outlet/>

          
          </div> 
                  <br></br><br></br>

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
        <footer class="footer">
          <div></div>
        </footer>
      </div>

    </html>
   
  );
}
