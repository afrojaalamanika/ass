import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import { getAllproducts } from "@/lib/api";
import { IProducts } from "@/types/product.type";


export default async function Home() {
const data = await getAllproducts()
const products:IProducts[]= data


  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <Banner></Banner>
     <AllProducts products={products}></AllProducts>
    </div>
  );
}
