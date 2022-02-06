import Image from "next/image";
import { useEffect, useState } from "react";
import Info from "../general/info";

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
              width={(height + 200) / 1.5}
              height={height + 200}
            />
          </div>
        </div>
        <div className="about__text">
          <h3>info</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
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
