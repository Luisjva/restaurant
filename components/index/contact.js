import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Info from "../general/info";
import Language from "../general/language";

let containerCards;

export default function Contact() {
  const router = useRouter();
  const { locale } = router;

  const [height, setHeight] = useState(0);

  useEffect(() => {
    const documentHeight = document.querySelector(".contact").clientHeight;
    setHeight(documentHeight);

    window.addEventListener("resize", () => {
      const documentHeight = document.querySelector(".contact").clientHeight;
      setHeight(documentHeight);
    });
  }, []);

  return (
    <Info name="contact">
      <div className="contact">
        <div className="contact__img">
          <div>
            <Image
              src="/restaurant-5.jpg"
              alt="algo"
              width={(height + 220) / 1.5}
              height={height + 220}
            />
          </div>
        </div>
        <div className="contact__text">
          <p>
            75203 Harber Vista, Suite 221, 82181-7603, Port Melyssamouth,
            Massachusetts, United States
          </p>
          <a
            target="_blank"
            href={`https://www.instagram.com/luisjva.${locale}`}
            rel="noreferrer"
          >
            <Image
              src="/instagram.png"
              alt="instagram"
              width="70"
              height="70"
            />
          </a>
          <a target="_blank" href="mailto:luisjva16@gmail.com" rel="noreferrer">
            <Image src="/correo.png" alt="instagram" width="70" height="70" />
          </a>
        </div>
      </div>
      <style jsx>{`
        .contact__img {
          display: none;
        }

        .contact__img > div {
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

        .contact__text {
          align-items: center;
          display: grid;
          justify-content: center;
          gap: 1rem;
          text-align: center;
          padding: 0.5rem 2rem;
        }

        p {
          font-weight: 500;
        }

        @media screen and (min-width: 600px) {
          .contact {
            display: grid;
            grid-template-columns: 1fr 2fr;
          }

          .contact__img {
            display: block;
            overflow: hidden;
            position: relative;
          }

          .contact__text {
            padding: 1rem 2rem;
          }
        }
      `}</style>
    </Info>
  );
}
