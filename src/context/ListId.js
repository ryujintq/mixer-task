import { createContext, useState } from "react";
import { localStorageGet } from "../util/localStorage";

export const ListIdContext = createContext()

export const ListIdProvider = ({ children }) => {
    const [id, setId] = useState(localStorageGet('id'))

    return (
        <ListIdContext.Provider value={[id, setId]}>
            {children}
        </ListIdContext.Provider>
    )
}
