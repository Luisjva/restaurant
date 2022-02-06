import Image from "next/image";

import { colors } from "../../utils";
import Language from "./language";

export default function Card() {
  return (
    <div className="card__contenedor">
      <Image src="/food.jpg" alt="algo" width={150} height={150} />
      <div>
        <h4>
          <Language textEn={"Product"} textEs={"Producto"} />
        </h4>
        <p className="card__price">
          <span className="card__price__coin">$</span>10
          <span className="card__price__cents">.12</span>
        </p>
      </div>
      <style jsx>{`
        .card__contenedor {
          cursor: pointer;
          transition: 0.3s;
          width: 150px;
          margin: 0.25rem;
        }

        .card__contenedor:hover {
          background: ${colors.blue}22;
          transform: scale(1.05);
        }

        .card__contenedor > div {
          padding: 0 0.5rem;
          padding-bottom: 0.7rem;
        }

        h4 {
          margin-block-start: 0.5rem;
          margin-block-end: 0.5rem;
        }

        .card__price {
          display: inline;
          padding-left: 0.5rem;
          position: relative;
          font-size: 1.1rem;
          margin-block-start: 0;
          margin-block-end: 0;
        }

        .card__price > span {
          font-size: 0.8em;
          position: absolute;
        }

        .card__price__coin {
          left: 0;
        }

        .card__price__cents {
          right: -1.45em;
        }
      `}</style>
    </div>
  );
}
