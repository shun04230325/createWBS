import React, { createContext, useContext, useState } from "react";

// コンテキスト
const Contexst = createContext({});

export const ProvideContext = ({ children }) => {
    const con = useProvideContext();
    return <Contexst.Provider value={con}>{children}</Contexst.Provider>;
}

export const useWbs =() => {
return useContext(Contexst)
}

const useProvideContext=()=>{

    const [a,b] =useState();
    const [c,d] =useState();


    return {a,b,c,d}
}