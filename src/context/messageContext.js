import { createContext, useEffect, useState } from "react";

export const MessageContext = createContext();

export const MessageContextProvider = ({ children }) => {
  const [selecteduser, setSelectedUser] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <MessageContext.Provider
      value={{ selecteduser, setSelectedUser, isLoaded, setIsLoaded }}
    >
      {children}
    </MessageContext.Provider>
  );
};
