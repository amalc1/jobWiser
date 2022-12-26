import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function AuthContext({ children }) {
  const [loggedUser, setloggedUser] = useState(null);
  const [connected, setConnected] = useState(false);
  const [chatMembers, setChatMembers] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        loggedUser,
        setloggedUser,
        connected,
        setConnected,
        chatMembers,
        setChatMembers,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
