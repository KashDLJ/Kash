"use client"

import React from "react";
import { createContext , useContext , useState, ReactNode } from "react";
import noProfilePic from '@/assets/noprofilepic.png'

type UserContextType = {
    user: string,
    setUser: (user: string) => void,
    imgPath: string,
    setImgPath: (path: string) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({children} : { children : ReactNode}) =>{
    const [user,setUser] = useState("Visitante")
    const [imgPath,setImgPath] = useState(noProfilePic.src)
    
    return (
        <UserContext.Provider value={{user,setUser,imgPath,setImgPath}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () =>{
    const context = useContext(UserContext)
    return context
}