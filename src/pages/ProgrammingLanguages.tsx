import * as React from "react"
import { createRoot } from "react-dom/client";
import LoadingImage from '../components/LoadingImage';
import Navbar from '../components/Navbar';
import { useState, useEffect } from "react";

interface MiscImage {
  image: string;
}

interface LanguageItem {
  name: string;
  short_description: string;
  images: MiscImage[];
}

const ProgrammingLanguages: React.FC = () => {
  const [languageData, setLanguageData] = useState<LanguageItem[]>([]);
  const [pageReady, setPageReady] = useState(false);
  const [canMap, setCanMap] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = 'apiUser';
        const password = 'apiPassword';
        const encodedCredentials = btoa(`${username}:${password}`);
        const headers = new Headers();
        headers.append('Authorization', `Basic ${encodedCredentials}`);

        const res = await fetch('https://8bit-backend-mock-project.vercel.app/api/programming-languages', {
          method: 'GET',
          headers: headers,
        });

        if (res.ok) {
          const data: LanguageItem[] = await res.json();
          setLanguageData(data);
          setCanMap(true);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (e) {
        console.error(e);
      } finally {
        setPageReady(true);
      }
    };

    fetchData();
  }, []);

  const mapData = () => {
    return languageData.map((item, index) => (
      <div key={index} className="card mb-3">
        <div className="card-body">
          <h3 className="card-subtitle">{item.name}</h3>
          <p className="card-subtitle py-1" style={{ color: 'grey' }}>
            {item.short_description}
          </p>
          <hr />
          <div className="row justify-content-start pt-2">
            {item.images.map((image, index) => (
              <div key={index} className="col-12 col-md-6">
                <LoadingImage
                  imageUri={image.image}
                  className="img-fluid shadow-lg mb-5 bg-body rounded w-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    ));
  };

  return pageReady ? (
    <>
      <Navbar />
      <div className="container text-left my-5" style={{ paddingTop: 100 }}>
        {canMap ? mapData() : <div>Uh oh! Something went wrong with our request for data. Please refresh and try again!</div>}
      </div>
    </>
  ) : (
    <>
      <Navbar />
      <div className="d-flex justify-content-center" style={{ paddingTop: 100 }}>
        <div className="spinner-border my-5"></div>
      </div>
    </>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = document.getElementById("root");
  createRoot(root).render(<ProgrammingLanguages />);
}
