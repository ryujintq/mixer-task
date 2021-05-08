import { createContext, useState } from "react";

export const OverviewContext = createContext()

export const OverviewProvider = ({ children }) => {
    const [overview, setOverview] = useState(null)

    return (
        <OverviewContext.Provider value={[overview, setOverview]}>
            {children}
        </OverviewContext.Provider>
    )
}
