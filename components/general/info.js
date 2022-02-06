import { useEffect, useState } from "react";

export default function Info({ children, name }) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    let heightContent = document.querySelector(
      `.info-${name}__content`
    ).clientHeight;
    setHeight(heightContent);

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
          height: ${(height * 0.8).toFixed(3)}px;
          position: relative;
        }

        .info-${name}__content {
          background: #fff;
          left: 50%;
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 90%;
          z-index: 50;
        }

        @media screen and (min-width: 1000px) {
          .info-${name}__content {
            max-width: 950px;
          }
        }
      `}</style>
    </div>
  );
}
