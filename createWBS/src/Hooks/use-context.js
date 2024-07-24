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
    const [bigTasks, setBigTasks] = useState([
        {
            id: 1,
            date: '',
            subTasks: [{ id: 1, date: '' }],
        },
    ]);

    return {
        bigTasks,
        setBigTasks,
    };
}
