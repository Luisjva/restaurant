import "../styles/globals.css";
import { createContext, useState } from "react";

import Modal from "../components/general/modal";
import Nav from "../components/general/nav";

export const ModalContext = createContext();

function MyApp({ Component, pageProps }) {
  const [distances, setDistances] = useState({ width: 0, height: 0 });
  const [modalOpen, setModalOpen] = useState(false);
  const [producto, setProducto] = useState(undefined);

  return (
    <>
      <ModalContext.Provider
        value={{
          distances,
          setDistances,
          modalOpen,
          setModalOpen,
          producto,
          setProducto,
        }}
      >
        <Modal />
        <Nav />
        <Component {...pageProps} />
      </ModalContext.Provider>
    </>
  );
}

export default MyApp;
