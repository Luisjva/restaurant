import Image from "next/image";
import { useEffect, useState } from "react";

import Info from "../general/info";
import Language from "../general/language";

export default function About() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const documentHeight = document.querySelector(".about").clientHeight;
    setHeight(documentHeight);

    window.addEventListener("resize", () => {
      const documentHeight = document.querySelector(".about").clientHeight;
      setHeight(documentHeight);
    });
  }, []);

  return (
    <Info name="about">
      <div className="about">
        <div className="about__img">
          <div>
            <Image
              src="/restaurant-2.jpg"
              alt="algo"
              width={(height + 265) / 1.5}
              height={height + 265}
            />
          </div>
        </div>
        <div className="about__text">
          <h3>
            <Language textEn="About" textEs="Sobre nosotros" />
          </h3>
          <p>
            <Language
              textEn={`Here is a text that describes your business in order to capture the customer's interest, perhaps a bit of the restaurant history and how it works. Here is a text that describes your business in order to capture the customer's interest, perhaps a bit of the restaurant history and how it works. Here is a text that describes your business in order to capture the customer's interest, perhaps a bit of the restaurant history and how it works.`}
              textEs={`Aquí va un texto que describa su negocio para captar e interesar al cliente en como son, quiza un poco de su histora, hablas de como trabajan. Aquí va un texto que describa su negocio para captar e interesar al cliente en como son, quiza un poco de su histora, hablas de como trabajan. Aquí va un texto que describa su negocio para captar e interesar al cliente en como son, quiza un poco de su histora, hablas de como trabajan.`}
            />
          </p>
        </div>
      </div>
      <style jsx>{`
        .about__img {
          display: none;
        }

        .about__text {
          text-align: center;
          padding: 0.5rem 2rem;
        }

        .about__text > h3 {
          font-size: 1.5rem;
        }

        @media screen and (min-width: 700px) {
          .about {
            display: grid;
            grid-template-columns: 1fr 2fr;
          }

          .about__img {
            display: block;
            overflow: hidden;
            position: relative;
          }

          .about__img > div {
            align-items: center;
            display: flex;
            justify-content: center;
            left: 50%;
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            height: 120%;
            width: 120%;
          }
        }
      `}</style>
    </Info>
  );
}
