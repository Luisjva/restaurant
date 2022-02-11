import Image from "next/image";
import { useEffect, useState } from "react";

export default function Slider({ children, img }) {
  return (
    <div className="slider">
      <div className="slider__content">{children}</div>
      <style jsx>{`
        .slider {
          align-items: center;
          background: linear-gradient(#0007, #0007), url(${img});
          background-size: cover;
          background-position: center;
          display: flex;
          justify-content: center;
          height: 10rem;
          position: relative;
          overflow: hidden;
          z-index: 20;
        }

        .slider__content {
          align-items: center;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 50;
        }

        @media screen and (min-width: 600px) {
          .slider {
            align-items: center;
            display: flex;
            justify-content: center;
            height: 18rem;
            position: relative;
            overflow: hidden;
            z-index: 20;
          }
        }
      `}</style>
    </div>
  );
}
