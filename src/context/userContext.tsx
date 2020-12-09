import { createContext, Dispatch, ReactChild, useReducer } from "react";
import { inialState, reducer, State, ActionType } from "../reducer/user";

export const UserContext = createContext<State | undefined>(undefined);

export const UserUpdateContext = createContext<Dispatch<ActionType>>(null);

export function UserContextProvider({ children }: { children: ReactChild }) {
  const [user, dispatch] = useReducer(reducer, inialState);

  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={dispatch}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}
