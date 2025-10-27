import { Children, createContext } from "react";
import { useState,useEffect } from "react";


export const MyContext=createContext();
export const ContextProvider=({children})=>{
    
    const[search,setSearch]=useState();
    const[addCart,setAddCart]=useState(()=>{
        try{
        const saved=localStorage.getItem("addCart")
        return saved?JSON.parse(saved):[]
        }catch(err){
            console.log('error:',err)
            return []
        }
    });
    useEffect(()=>{
        localStorage.setItem('addCart',JSON.stringify(addCart))
    },[addCart])

        const[quantities,setQuantities]=useState([])
        // ()=>{
    //     try{
    //     const saved=localStorage.getItem("quantities")
    //     return saved?JSON.parse(saved):[]
    // }catch(err){
    //     console.log('error:',err)
    //     return []
    // }
      
    // });

    // useEffect(()=>{
    //     localStorage.setItem('quantities',JSON.stringify(quantities))
    // },[quantities])

    return(
        <div>
            <MyContext.Provider value={{search,setSearch,addCart,setAddCart,quantities,setQuantities}} >
            {children}
            </MyContext.Provider>
        </div>
    )   
}