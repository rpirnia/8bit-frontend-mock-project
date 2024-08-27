import * as React from "react"; 
import { createRoot } from "react-dom/client";
import Navbar from "../components/Navbar";

const ProgrammingLanguages = () => { 

return ( 

<> 
<Navbar/>

<div className="container text-left my-5" style={{paddingTop:100}}>

This is the programming language page 

</div> 

</> 

); 

}; 

export default ProgrammingLanguages;

const root = document.getElementById("root");

createRoot(root).render(<ProgrammingLanguages />);