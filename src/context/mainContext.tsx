import { createContext } from "react";
import IPost from "../interfaces/IPost";

export interface MainContextType {
    posts:IPost[],
    setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
    
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
   
    searchDone:number;
    setsearchDone:React.Dispatch<React.SetStateAction<number>>;
    showHistory:boolean;
    setShowHistory:React.Dispatch<React.SetStateAction<boolean>>;

}

const defaultMainContextValue: MainContextType = {
    posts: [],
    setPosts: () => {},

    isLoading: false,
    setIsLoading: () => {},
   
    searchDone: 0,
    setsearchDone: () => {},
    showHistory: false,
    setShowHistory: () => {},
};

export const MainContext = createContext<MainContextType>(defaultMainContextValue);