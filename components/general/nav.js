import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { colors } from "../../utils";
import Language from "./language";

export default function Nav() {
  const router = useRouter();
  const { locale } = router;

  const btns = [1, 2, 3];

  const [open, setOpen] = useState(false);

  const click = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <nav>
      <div>
        <div>Logo</div>
        <div className="nav__right">
          <div className="nav__right__language">
            <Link href="/" locale="en">
              <a
                className={
                  locale === "en"
                    ? " nav__right__language__a nav__right__language__a--on"
                    : "nav__right__language__a"
                }
              >
                EN
              </a>
            </Link>
            <Link href="/" locale="es">
              <a
                className={
                  locale === "es"
                    ? "nav__right__language__a nav__right__language__a--on"
                    : "nav__right__language__a"
                }
              >
                ES
              </a>
            </Link>
          </div>
          <div className="nav__right__links">
            <div onClick={() => click()} className="nav__right__links__btn">
              {btns.map((number) => {
                return (
                  <div
                    key={number}
                    className={
                      open
                        ? `nav__right__links__btn__${number} nav__right__links__btn__${number}--close`
                        : `nav__right__links__btn__${number}`
                    }
                  ></div>
                );
              })}
            </div>
            <div
              className={
                open
                  ? "nav__right__links__container nav__right__links__container--open"
                  : "nav__right__links__container"
              }
            >
              <Link href="/">
                <a onClick={() => click()}>
                  <Language textEn="Home" textEs="Inicio" />
                </a>
              </Link>
              <Link href="/menu">
                <a onClick={() => click()}>
                  <Language textEn="Menu" textEs="Menu" />
                </a>
              </Link>
              <Link href="/contact">
                <a onClick={() => click()}>
                  <Language textEn="Contact" textEs="Contacto" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        nav {
          align-items: center;
          background: ${colors.primary};
          color: #fff;
          display: flex;
          position: sticky;
          justify-content: center;
          max-height: 3rem;
          height: 3rem;
          padding: 0 0.5rem;
          top: 0;
        }

        nav > div {
          display: grid;
          grid-template-columns: 1fr 2fr;
          width: 100%;
        }

        .nav__right {
          align-items: center;
          display: flex;
          height: 3rem;
          justify-content: flex-end;
        }

        /*//////////////////////////////////////////////////*/

        .nav__right__language {
          align-items: center;
          display: flex;
          justify-content: space-between;
          height: 100%;
          width: 75px;
        }

        .nav__right__language__a {
          align-items: center;
          background: ${colors.gray}77;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          height: 2rem;
          padding: 0.25rem 0.35rem;
          transition: 0.3s;
          width: 2rem;
        }

        .nav__right__language__a:hover {
          background: ${colors.gray}aa;
          transform: scale(1.07);
        }

        .nav__right__language__a--on {
          background: ${colors.gray}cc;
        }

        /*//////////////////////////////////////////////////*/

        .nav__right__links {
          margin-left: 0.7rem;
          height: 100%;
        }

        .nav__right__links__btn {
          position: relative;
          width: 35px;
          cursor: pointer;
        }

        .nav__right__links__btn > div {
          background: ${colors.gray};
          border-radius: 10px;
          height: 4px;
          position: absolute;
          transition: 0.3s;
          width: 100%;
        }

        .nav__right__links__btn__1 {
          top: 20%;
        }

        .nav__right__links__btn__1--close {
          transform: translateY(-50%) rotate(45deg);
          top: 50%;
        }

        .nav__right__links__btn__2 {
          transform: translateY(-50%);
          top: 50%;
          opacity: 1;
        }

        .nav__right__links__btn__2--close {
          opacity: 0;
        }

        .nav__right__links__btn__3 {
          bottom: 20%;
        }

        .nav__right__links__btn__3--close {
          transform: translateY(-50%) rotate(-45deg);
          top: 50%;
        }

        .nav__right__links > div {
          height: 100%;
        }

        .nav__right__links__container {
          position: absolute;
          right: 0;
          top: -310%;
          transition: 0.3s;
        }

        .nav__right__links__container--open {
          top: 100%;
        }

        .nav__right__links a {
          align-items: center;
          background: ${colors.primary};
          display: flex;
          justify-content: center;
          height: 100%;
          padding: 0 0.5rem;
          transition: 0.3s;
          width: 40vw;
        }

        .nav__right__links a:hover {
          background: ${colors.gray}aa;
        }

        @media screen and (min-width: 500px) {
          .nav__right__links__btn {
            display: none;
          }

          .nav__right__links__container,
          .nav__right__links__container--open {
            display: flex;
            flex-direction: row;
            position: relative;
            right: 0;
            top: 0;
            transition: 0.3s;
          }

          .nav__right__links a {
            width: auto;
          }
        }
      `}</style>
    </nav>
  );
}
