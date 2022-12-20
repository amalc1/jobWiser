import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function AuthContext({ children }) {
  const [loggedUser, setloggedUser] = useState(null);
  const [connected, setConnected] = useState(false);

  return (
    <GlobalContext.Provider
      value={{ loggedUser, setloggedUser, connected, setConnected }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
