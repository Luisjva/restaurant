import { useContext } from "react";
import Image from "next/image";

import { colors } from "../../utils";
import Language from "./language";
import { ModalContext } from "../../pages/_app";

export default function Card({ food }) {
  const { setDistances, setModalOpen, setProducto } = useContext(ModalContext);
  const open = (e) => {
    setDistances({ width: e.clientX, height: e.clientY });
    setProducto(food);
    setTimeout(() => {
      setModalOpen(true);
    }, 300);
  };

  return (
    <div onClick={(e) => open(e)} className="card__container">
      <Image
        src={`/food-${food.picture}.jpg`}
        alt="algo"
        width={150}
        height={150}
      />
      <div className="card__info">
        <h4>
          <Language textEn={"Product"} textEs={"Producto"} />
        </h4>
        <p className="card__price">
          <span className="card__price__coin">$</span>10
          <span className="card__price__cents">.12</span>
        </p>
      </div>
      <style jsx>{`
        .card__container {
          cursor: pointer;
          transition: 0.3s;
          width: 150px;
          margin: 0.25rem;
        }

        .card__container:hover {
          background: ${colors.blue}22;
          transform: scale(1.05);
        }

        .card__info {
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

        @media screen and (max-width: 375px) {
          .card__container {
            cursor: pointer;
            width: 125px;
          }
        }
      `}</style>
    </div>
  );
}
