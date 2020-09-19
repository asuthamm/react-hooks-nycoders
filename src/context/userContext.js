import React, { createContext } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const UserContext = createContext();

export const UserProvider = props => {
  return (
    <UserContext.Provider value={(users, handleDelete, handleAddUser)}>
      {props.children}
    </UserContext.Provider>
  );
};
