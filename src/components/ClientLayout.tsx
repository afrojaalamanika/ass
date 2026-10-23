"use client";
import { ReactNode } from "react";
import { ProductProvider } from "@/app/context/ExerciseContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const ClientLayout =({children}:{children:ReactNode}) =>{
return(
    <div>
        <ProductProvider>
            <nav>
                <Navbar />
    
            </nav>
    <main className="'min-h-[60vh]">{children}</main>
    <Footer></Footer>
    <Toaster></Toaster>
        </ProductProvider>
    </div>
)
}
export default ClientLayout;