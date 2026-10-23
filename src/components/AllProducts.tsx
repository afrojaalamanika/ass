import { IProducts } from '@/types/product.type';
import React from 'react';
import AllProductCard from './AllProductCard';

const AllProducts = ({products}: {products:IProducts[]}) => {
    return (
        <div className='container mx-auto'>
            <h2 className='font-bold text-3xl'>THE LIBRARY</h2>
            <h2 className='text-gray-400'>Twelve lifts covering every major muscle group.</h2>
            <div className='grid grid-cols-3 gap-4'>
                {products.map ((product => 
                    <AllProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
};

export default AllProducts;