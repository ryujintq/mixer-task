import { createContext, useState } from "react";

export const FavouritesContext = createContext()

export const FavouritesProvider = ({ children }) => {
    const [favourites, setFavourites] = useState(['q', 'a'])

    return (
        <FavouritesContext.Provider value={[favourites, setFavourites]}>
            {children}
        </FavouritesContext.Provider>
    )
}
