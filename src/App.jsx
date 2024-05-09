import "./App.css";
import Home from "../src/Pages/Home";

import BaseOutlet from "./Layout/BaseOutlet";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Graphics from "./Pages/Graphics/Graphics";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseOutlet />}>
          <Route path="/" element={<Home />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Graphics" element={<Graphics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
