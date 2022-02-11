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
  }, [name]);

  return (
    <div className={`info-${name}`}>
      <div className={`info-${name}__content`}>{children}</div>
      <style jsx>{`
        .info-${name} {
          position: relative;
          height: ${height}px;
        }

        .info-${name}__content {
          background: #fff;
          border-radius: 5px;
          left: 50%;
          position: absolute;
          top: -15px;
          transform: translateX(-50%);
          width: 90%;
          max-width: 1000px;
          z-index: 50;
        }

        @media screen and (min-width: 600px) {
          .info-${name}__content {
            top: -40px;
          }
        }
      `}</style>
    </div>
  );
}
