import { create } from "zustand";
import { persist } from "zustand/middleware";

 const   useFavoriteStore = create(
  persist(//here store into the local storage
    (set) => ({
      favorites: [],

      addFavorite: (movie) =>
        set((state) => ({ favorites: [...state.favorites, movie] })),
      removeFavorite:(id) => set((state) =>({favorites:state.favorites.filter((movie) => movie.id !==id)}))
    }),
    { name: "favorites-storage" },
  ),
)
 export default useFavoriteStore;
 