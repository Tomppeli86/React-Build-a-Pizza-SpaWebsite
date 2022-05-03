import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./index.css";

import axios from 'axios'


import App from "./App";
import Koti from "./routes/Koti";
import Yhteys from "./routes/Yhteys";
import Tarina from "./routes/Tarina";

import Pictures from "./routes/Pictures";
import Pictures2 from "./routes/Pictures2";
import Pictures3 from "./routes/Pictures3";



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Koti" element={<Koti />} />
        <Route path="Tarina" element={<Tarina />} />
        <Route path="Yhteys" element={<Yhteys />} />
        
        <Route path="Pictures" element={<Pictures />} />
        <Route path="Pictures2" element={<Pictures2 />} />
        <Route path="Pictures3" element={<Pictures3 />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
