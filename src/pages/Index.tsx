import * as React from "react";
import Navbar from "../components/Navbar";
import { createRoot } from "react-dom/client";

const Index = () => {
  return (
    <>
     <Navbar/>
      <div className="container text-left" style={{paddingTop:100}}>
        <section className="py-6" style={{ marginTop: "15%" }}>
          <div
            className="container min-vh-50 py-6 d-flex justify-content-center align-items-center"
            style={{ maxWidth: 1920 }}
          >
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="lc-block d-flex flex-row justify-content-center"></div>
                <div className="lc-block mb-4">
                  <div>
                    <h1 className="fw-bold display-1">Programming Languages</h1>
                  </div>
                </div>
                <div className="lc-block">
                  <div>
                    <p className="h2">Ruhi Pirnia</p>
                    <p className="lead">
                      Click the button below to view some programming
                      languages.
                    </p>
                  </div>
                </div>
                <div className="lc-block">
                  <a
                    className="btn btn-primary"
                    href="./programming-languages.html"
                    role="button"
                    style={{ backgroundColor: "#1a7e9c" }}
                  >
                    To Programming Languages
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
const root = document.getElementById("root");
createRoot(root).render(<Index />);