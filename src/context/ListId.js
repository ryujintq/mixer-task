import { createContext, useState } from "react";
import { localStorageGet } from "../util/localStorage";

export const ListIdContext = createContext()

export const ListIdProvider = ({ children }) => {
    const [data, setId] = useState(localStorageGet('id'))

    return (
        <ListIdContext.Provider value={[data, setId]}>
            {children}
        </ListIdContext.Provider>
    )
}
