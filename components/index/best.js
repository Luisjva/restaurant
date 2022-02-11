import { useEffect, useState } from "react";
import { colors, foods } from "../../utils";
import Card from "../general/card";
import Info from "../general/info";
import Language from "../general/language";

let containerCards;

export default function Best() {
  const bestProducts = [[], [], [], [], [], [], [], [], [], []];
  const [touchScreen, setTouchScreen] = useState(undefined);
  const [moveSliderLeft, setMoveSliderLeft] = useState(false);
  const [moveSliderRight, setMoveSliderRight] = useState(true);
  const [bestFood, setBestFood] = useState([]);

  useEffect(() => {
    setTouchScreen(
      "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
    );

    let listFoods = [];
    foods.map((food) => {
      if (food.category.includes("combo")) listFoods.push(food);
    });

    console.log(listFoods);
    setBestFood(listFoods);
  }, []);

  const move = (e) => {
    containerCards = document.querySelector(".best__cards__container");
    let scrollNow = containerCards.scrollLeft;
    let widthContainerCards = containerCards.clientWidth;
    let scrollContainerCards = containerCards.scrollWidth;

    if (e.target.innerText === ">") {
      containerCards.scroll(scrollNow + widthContainerCards * 0.8, 0);
      let newMoveSliderLeft = moveSliderLeft;
      let newMoveSliderRight = moveSliderRight;

      if (!moveSliderLeft) newMoveSliderLeft = true;

      setTimeout(() => {
        scrollNow = containerCards.scrollLeft;

        if (scrollNow + widthContainerCards >= scrollContainerCards) {
          newMoveSliderRight = false;
        } else {
          newMoveSliderRight = true;
        }

        setMoveSliderLeft(newMoveSliderLeft);
        setMoveSliderRight(newMoveSliderRight);
      }, 500);
    } else {
      containerCards.scroll(scrollNow - widthContainerCards * 0.8, 0);
      let newMoveSliderLeft = moveSliderLeft;
      let newMoveSliderRight = moveSliderRight;

      if (!moveSliderRight) newMoveSliderRight = true;

      setTimeout(() => {
        scrollNow = containerCards.scrollLeft;

        if (scrollNow === 0) {
          newMoveSliderLeft = false;
        } else {
          newMoveSliderLeft = true;
        }

        setMoveSliderLeft(newMoveSliderLeft);
        setMoveSliderRight(newMoveSliderRight);
      }, 500);
    }
  };

  return (
    <Info name="best">
      <div className="best__container">
        <h3>
          <Language textEn={"Recommendations"} textEs={"Recomendaciones"} />
        </h3>
        <div
          className={
            touchScreen
              ? "best__cards__arow__container best__cards__arow__container--unseen"
              : "best__cards__arow__container"
          }
        >
          <button
            style={{ left: 0 }}
            className={
              moveSliderLeft
                ? "best__cards__arow"
                : "best__cards__arow best__cards__arow--unseen"
            }
            onClick={(e) => {
              move(e);
            }}
          >
            &#60;
          </button>
          <button
            style={{ right: 0 }}
            className={
              moveSliderRight
                ? "best__cards__arow"
                : "best__cards__arow best__cards__arow--unseen"
            }
            onClick={(e) => {
              move(e);
            }}
          >
            &#62;
          </button>
        </div>
        <div
          className={
            touchScreen
              ? "best__cards__container"
              : "best__cards__container best__cards__container__pc"
          }
        >
          {bestFood.map((food, index) => {
            return <Card food={food} key={index} />;
          })}
        </div>
      </div>
      <style jsx>{`
        .best__container {
          padding: 0.5rem;
          padding-bottom: 1.5rem;
        }

        h3 {
          font-size: 1.5rem;
          text-align: center;
        }

        .best__cards__container {
          display: grid;
          grid-auto-flow: column;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-behavior: smooth;
        }

        .best__cards__container__pc {
          overflow-x: hidden;
          margin: 0 3rem;
        }

        .best__cards__arow__container {
          position: relative;
        }

        .best__cards__arow__container--unseen {
          display: none;
        }

        .best__cards__arow {
          border: none;
          border-radius: 10px;
          background: #fff;
          font-size: 1.5rem;
          padding: 0.3em 0.6em;
          position: absolute;
          transition: 0.3s;
          top: 90px;
          outline: none;
        }

        .best__cards__arow:hover {
          border: none;
          background: ${colors.primary}33;
        }

        .best__cards__arow--unseen {
          display: none;
        }
      `}</style>
    </Info>
  );
}
