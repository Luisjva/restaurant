import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div></div>
      <style jsx>{`
        header {
          height: 20rem;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        header > div {
          height: 22rem;
          position: absolute;
        }
      `}</style>
    </header>
  );
}
