import { createContext, useState } from "react";

export const ToWatchContext = createContext([])

export const ToWatchProvider = ({ children }) => {
    const [toWatch, setToWatch] = useState([])

    return (
        <ToWatchContext.Provider value={[toWatch, setToWatch]}>
            {children}
        </ToWatchContext.Provider>
    )
}