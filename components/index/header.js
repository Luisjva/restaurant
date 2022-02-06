import { useEffect, useState } from "react";
import Image from "next/image";

import { colors } from "../../utils";

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
      <div>
        <Image
          src="/restaurant-1.jpg"
          alt="algo"
          width={width}
          height={width / 1.777}
        />
        <div></div>
      </div>
      <h1>Nombre</h1>
      <p>Un restaurante para recordar</p>
      <style jsx>{`
        header {
          align-items: center;
          display: flex;
          flex-direction: column;
          height: ${(width - 20) / 1.777}px;
          justify-content: center;
          width: 100%;
          max-height: 350px;
          padding-bottom: 3rem;
          position: relative;
          overflow: hidden;
        }

        header > div {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }

        header > div > div {
          background: ${colors.primary}55;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
        }

        h1,
        p {
          color: #fff;
          position: relative;
          z-index: 100;
          margin-block-end: 0;
        }
      `}</style>
    </header>
  );
}
