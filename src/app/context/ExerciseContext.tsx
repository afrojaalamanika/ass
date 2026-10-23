'use client';

import { IProducts,IProductContext } from "@/types/product.type";
import { ReactNode, useContext, useState } from "react";
import { createContext } from "react"

const ExerciseContext = createContext<IProductContext | undefined>(undefined);


export function ProductProvider({children} : {children:ReactNode}){
    const [saved, setSaved] = useState<IProducts[]>([])
    const [myplan, setMyplan] = useState<IProducts[]>([])
    const value={  myplan, setMyplan, saved,setSaved}
    return(
        <ExerciseContext.Provider value={value}>{children}</ExerciseContext.Provider>
    )
}



export function useExerciseContext() {
  const context = useContext(ExerciseContext);

  if (!context) {
    throw new Error(
      "useExerciseContext must be used inside ProductProvider"
    );
  }

  return context;
}



