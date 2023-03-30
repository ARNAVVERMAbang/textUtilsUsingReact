import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("dark");
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={Mode} />

        <Routes>
          <Route exact path="/about" element= {<About />} />
            
          <Route exact path="/" element =  {<TextForm TextAreaPlaceHolder="Enter your text here" />}/>
        </Routes>

        {/* <About/> */}
      </Router>
    </>
  );
}

export default App;
