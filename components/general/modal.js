import { useContext } from "react";
import { ModalContext } from "../../pages/_app";

import Language from "./language";

export default function Modal() {
  const { distances, modalOpen, setModalOpen, producto } =
    useContext(ModalContext);

  const closed = () => {
    setModalOpen(false);
  };

  return (
    <div
      className={
        modalOpen
          ? "modal__container modal__container--open"
          : "modal__container"
      }
    >
      <div className="modal__background" onClick={() => closed()}></div>
      <div className="modal__content">
        <div>
          <div className="modal__content__btn" onClick={() => closed()}>
            <div className="modal__content__btn__1"></div>
            <div className="modal__content__btn__2"></div>
          </div>
          <div className="modal__content__img"></div>
          <div className="modal__content__text">
            <h3>
              <Language textEn={"Product"} textEs={"Producto"} />
            </h3>
            <p>
              <Language textEn={"Ingredients"} textEs={"Ingredientes"} />
            </p>
            <ul>
              <li>
                <Language textEn={"Ingredient"} textEs={"Ingrediente"} />
              </li>
              <li>
                <Language textEn={"Ingredient"} textEs={"Ingrediente"} />
              </li>
              <li>
                <Language textEn={"Ingredient"} textEs={"Ingrediente"} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        .modal__container {
          height: 0;
          left: ${distances.width}px;
          position: sticky;
          top: ${distances.height}px;
          transition: 0.3s;
          width: 0;
          z-index: 250;
        }

        .modal__container--open {
          height: 0;
          left: 0;
          top: 0;
          width: 100%;
        }

        .modal__background {
          background: #0003;
          height: 100vh;
          width: 100%;
        }

        .modal__content {
          height: 100vh;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
        }

        .modal__content > div {
          background: #fff;
          border-radius: 20px;
          position: absolute;
          left: 50%;
          overflow: hidden;
          transform: translate(-50%, -50%);
          top: 50%;
          width: 80%;
          height: auto;
          max-height: 90vh;
          overflow-y: auto;
        }

        .modal__content__btn {
          background: radial-gradient(#0007, 25%, #0000);
          cursor: pointer;
          height: 30px;
          position: absolute;
          right: 10px;
          top: 10px;
          width: 30px;
        }

        .modal__content__btn > div {
          background: #fff;
          border-radius: 5px;
          position: absolute;
          top: 50%;
          height: 3px;
          width: 25px;
        }

        .modal__content__btn__1 {
          transform: rotate(45deg);
        }

        .modal__content__btn__2 {
          transform: rotate(-45deg);
        }

        .modal__content__img {
          align-items: center;
          background: url(${producto
            ? `/food-${producto.picture}.jpg`
            : "/food-1.jpg"});
          background-size: cover;
          background-position: center;
          border-radius: 20px;
          display: flex;
          justify-content: center;
          height: 10rem;
          overflow: hidden;
        }

        .modal__content__text {
          padding: 1rem;
        }

        @media screen and (min-width: 850px) {
          .modal__content > div {
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            max-width: 700px;
          }

          .modal__content__btn {
            background: none;
          }

          .modal__content__btn > div {
            background: #000;
          }

          .modal__content__img {
            height: auto;
          }

          .modal__content__text {
            margin: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
