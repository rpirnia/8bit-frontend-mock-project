import * as React from "react"; 
import { createRoot } from "react-dom/client";
import LoadingImage from "../components/LoadingImage";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";


const ProgrammingLanguages = () => { 
    const [languageData, setLanguageData] = useState([]); 

    const [pageReady, setPageReady] = useState(false); 

    const [canMap, setCanMap] = useState(false);

    useEffect(() => { 

        const fetchData = async () => { 
        
        try { 
        
        const username = "apiUser"; 
        
        const password = "apiPassword"; 
        
        const encodedCredentials = btoa(`${username}:${password}`); 
        
        const headers = new Headers(); headers.append("Authorization", `Basic ${encodedCredentials}`); 
        
         
        
        const res = await fetch( `https://8bit-backend-mock-project.vercel.app/api/programming-languages`, { method: "GET", headers: headers }); 
        
         
        
        if (res.ok) { 
        
        const data = await res.json();
        
        console.log(data); 
        
        setLanguageData(data); 
        
        setCanMap(true); 
        
        } 
        
        } catch (e: any) { 
        
        console.log(e); 
        
        } finally { 
        
        setPageReady(true); 
        
        } 
        
        }; 
        
         
        
        fetchData(); 
        
        }, []);

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