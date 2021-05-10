import React, { createContext, useState } from 'react'

export const SelectedContext = createContext(null)

export const SelectedProvider = ({ children }) => {
    const [selected, setSelected] = useState('Search')

    return (
        <SelectedContext.Provider value={{ selected, setSelected }}>
            {children}
        </SelectedContext.Provider>
    )
}
