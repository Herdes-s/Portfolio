import { createContext, useContext, useState } from "react";

const TemaContext = createContext();

export default function TemaProvider({ children }) {
  const [tema, setTema] = useState(false);

  const toggleLightMode = () => {
    setTema(!tema);

    if (!tema) {
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
    }
  };

  return (
    <TemaContext.Provider value={{ tema, toggleLightMode }}>
      {children}
    </TemaContext.Provider>
  );
}

TemaProvider.useTema = function useTema() {
  return useContext(TemaContext);
};