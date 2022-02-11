import { useEffect, useState } from "react";

import Info from "../components/menu/info";
import Card from "../components/general/card";
import { colors, foods } from "../utils";
import Language from "../components/general/language";

export default function Menu() {
  const [width, setWidth] = useState(0);
  const [filter, setFilter] = useState("all");
  const [foodsHere, setFoodsHere] = useState([]);

  useEffect(() => {
    setWidth(innerWidth);
    window.addEventListener("resize", () => {
      if (innerWidth !== width) setWidth(innerWidth);
    });

    setFoodsHere(foods);
  }, []);

  const newFilter = (newCat) => {
    setFilter(newCat);
    if (newCat === "all") {
      setFoodsHere(foods);
    } else {
      let arrayFilter = [];

      console.log(newCat);

      foods.map((food) => {
        if (food.category.includes(newCat)) arrayFilter.push(food);
      });

      console.log(arrayFilter);

      setFoodsHere(arrayFilter);
    }
  };

  return (
    <>
      <header>
        <h1>Menu</h1>
      </header>
      <Info name="menu">
        <div className="filter">
          <button
            onClick={() => newFilter("all")}
            className={
              filter === "all"
                ? "filter__btn filter__btn--active"
                : "filter__btn"
            }
          >
            <Language textEn="Everything" textEs="Todo" />
          </button>
          <button
            onClick={() => newFilter("food")}
            className={
              filter === "food"
                ? "filter__btn filter__btn--active"
                : "filter__btn"
            }
          >
            <Language textEn="Foods" textEs="Comidas" />
          </button>
          <button
            onClick={() => newFilter("drink")}
            className={
              filter === "drink"
                ? "filter__btn filter__btn--active"
                : "filter__btn"
            }
          >
            <Language textEn="Drinks" textEs="Bebidas" />
          </button>
          <button
            onClick={() => newFilter("combo")}
            className={
              filter === "combo"
                ? "filter__btn filter__btn--active"
                : "filter__btn"
            }
          >
            Combos
          </button>
        </div>
        <div className="menu">
          {foodsHere.map((food, index) => {
            return (
              <div key={index}>
                <Card food={food} />
              </div>
            );
          })}
        </div>
      </Info>
      <style jsx>{`
        header {
          align-items: center;
          display: flex;
          background: linear-gradient(#0007, #0007), url(/restaurant-7.jpg);
          background-size: cover;
          background-position: center;
          flex-direction: column;
          height: ${(width - 20) / 1.777}px;
          justify-content: center;
          width: 100%;
          max-height: 350px;
          padding-bottom: 15px;
          position: relative;
          overflow: hidden;
        }

        h1,
        p {
          color: #fff;
          position: relative;
          z-index: 100;
          margin-block-end: 0;
        }

        .filter {
          align-items: center;
          display: flex;
          justify-content: center;
          margin: 1rem;
          gap: 0.7rem;
        }

        .filter__btn {
          background: ${colors.gray}00;
          border: none;
          transition: 0.6s;
          padding: 0.5rem;
        }

        .filter__btn:hover {
          background: ${colors.gray}bb;
          border-radius: 10px;
          transform: scale(1.17);
        }

        .filter__btn--active {
          background: ${colors.gray};
          border-radius: 10px;
          transform: scale(1.2);
          margin: 0.3rem;
        }

        .filter__btn--active:hover {
          background: ${colors.gray};
          border-radius: 10px;
          transform: scale(1.2);
        }

        .menu {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.25rem;
          padding: 0.5rem;
        }

        .menu > div {
          align-items: center;
          display: flex;
          justify-content: center;
        }

        @media screen and (min-width: 600px) {
          header {
            padding-bottom: 40px;
          }
        }

        @media screen and (min-width: 570px) {
          .menu {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }

        @media screen and (min-width: 780px) {
          .menu {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media screen and (min-width: 950px) {
          .menu {
            grid-template-columns: repeat(5, 1fr);
          }
        }
      `}</style>
    </>
  );
}
