import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function AuthContext({ children }) {
  const [loggedUser, setloggedUser] = useState(null);

  return (
    <GlobalContext.Provider value={{ loggedUser, setloggedUser }}>
      {children}
    </GlobalContext.Provider>
  );
}
