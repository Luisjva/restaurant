import { useEffect, useState } from "react";

export default function Header() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(innerWidth);
    window.addEventListener("resize", () => {
      if (innerWidth !== width) setWidth(innerWidth);
    });
  }, []);

  return (
    <header>
      <h1>Nombre</h1>
      <p>Un restaurante para recordar</p>
      <style jsx>{`
        header {
          align-items: center;
          display: flex;
          background: linear-gradient(#0007, #0007), url(/restaurant-1.jpg);
          background-size: cover;
          background-position: center;
          flex-direction: column;
          height: ${(width - 20) / 1.777}px;
          justify-content: center;
          width: 100%;
          max-height: 350px;
          padding-bottom: 15px;
          position: relative;
          overflow: hidden;
        }

        h1,
        p {
          color: #fff;
          position: relative;
          z-index: 100;
          margin-block-end: 0;
        }

        @media screen and (min-width: 600px) {
          header {
            padding-bottom: 40px;
          }
        }
      `}</style>
    </header>
  );
}
