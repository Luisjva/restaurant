import { useEffect, useState } from "react";

export default function Info({ children, name }) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    let heightContent = document.querySelector(
      `.info-${name}__content`
    ).clientHeight;
    setHeight(heightContent);

    setTimeout(() => {
      let heightContent = document.querySelector(
        `.info-${name}__content`
      ).clientHeight;
      setHeight(heightContent);
    }, 1200);

    window.addEventListener("resize", () => {
      let heightContent = document.querySelector(
        `.info-${name}__content`
      ).clientHeight;
      setHeight(heightContent);
    });
  }, [name]);

  return (
    <div className={`info-${name}`}>
      <div className={`info-${name}__content`}>{children}</div>
      <style jsx>{`
        .info-${name} {
          height: ${(height - 30).toFixed(3)}px;
          position: relative;
        }

        .info-${name}__content {
          background: #fff;
          border-radius: 10px;
          left: 50%;
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          transition: 0.3s;
          width: 90%;
          z-index: 50;
          overflow: hidden;
        }

        @media screen and (min-width: 600px) {
          .info-${name} {
            height: ${(height - 70).toFixed(3)}px;
          }
        }

        @media screen and (min-width: 1000px) {
          .info-${name}__content {
            max-width: 1000px;
          }
        }
      `}</style>
    </div>
  );
}
