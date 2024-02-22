import { createContext } from "react";
import IPost from "../interfaces/IPost";

export interface MainContextType {
    posts:IPost[],
    setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
    
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;

    displaySearchHistory:boolean;
    setdisplaySearchHistory:React.Dispatch<React.SetStateAction<boolean>>;

}

const defaultMainContextValue: MainContextType = {
    posts: [],
    setPosts: () => {},

    isLoading: false,
    setIsLoading: () => {},
   

    displaySearchHistory: false,
    setdisplaySearchHistory: () => {},
};

export const MainContext = createContext<MainContextType>(defaultMainContextValue);