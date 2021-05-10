import { createContext, useState } from "react";
import { localStorageGet } from "../util/localStorage";

export const ListIdContext = createContext()

export const ListIdProvider = ({ children }) => {
    const [listId, setListId] = useState(localStorageGet('id'))

    return (
        <ListIdContext.Provider value={{ listId, setListId }}>
            {children}
        </ListIdContext.Provider>
    )
}
