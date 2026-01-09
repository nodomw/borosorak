import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Komponens betöltődött");
  }, []);

  useEffect(() => {
    console.log(
      `A count értéke megváltozott: ${count}`,
    );
  }, [count]);

  // useEffect(() => {
  //   document.title = `Szia, ${input.value}`;
  // }, []);

  // data == null
  // useEffect(() => {
  //   data = "Betöltés...";
  //   setTimeout(() => {
  //     fetch("https://api.example.com/data")
  //       .then((response) => response.json())
  //       .then((reqdata) => {
  //         data = reqdata;
  //       });
  //   }, 2000);
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearInterval(interval);
  });
  // Figyeld az ablak méretének változását, és írd ki: Mobil / Tablet / Desktop.
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) {
        console.log("Mobil");
      } else if (width >= 600 && width < 1024) {
        console.log("Tablet");
      } else {
        console.log("Desktop");
      }
    };

    window.addEventListener(
      "resize",
      handleResize,
    );

    handleResize();

    return () => {
      window.removeEventListener(
        "resize",
        handleResize,
      );
    };
  }, []);

  useEffect(() => {
    console.log("Szűrés frissítve");
  }, [minPrice, maxPrice, onlyInStock]);
  return (
    <>
      <div>
        <a
          href="https://vite.dev"
          target="_blank"
        >
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() =>
            setCount((count) => count + 1)
          }
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save
          to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn
        more
      </p>
    </>
  );
}

export default App;
