import { createContext } from "react";

interface UserContextType {
  count: number;
  handleIncrement: () => void;
}
export const UserContext = createContext<UserContextType>({
  count: 0,
  handleIncrement: () => {}
});

export const UserContextProvider = UserContext.Provider;
export const UserContextConsumer = UserContext.Consumer;
