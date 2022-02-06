import Image from "next/image";
import { useEffect, useState } from "react";

export default function Slider({ children, img, size }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(innerWidth);

    window.addEventListener("resize", () => {
      setWidth(innerWidth);
    });
  }, []);

  return (
    <div className="slider">
      <div className="slider__img">
        <div></div>
        <Image
          src={img}
          alt="algo"
          width={width}
          height={width / (size.width / size.height)}
        />
      </div>
      <div className="slider__content">{children}</div>
      <style jsx>{`
        .slider {
          align-items: center;
          display: flex;
          justify-content: center;
          height: 18rem;
          position: relative;
          overflow: hidden;
          z-index: 20;
        }

        .slider__img {
          position: absolute;
          transform: translateY(-50%);
          top: 50%;
        }

        .slider__img > div {
          background: #0007;
          height: 100%;
          position: absolute;
          width: 100%;
          z-index: 25;
        }

        .slider__content {
          align-items: center;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 50;
        }
      `}</style>
    </div>
  );
}
