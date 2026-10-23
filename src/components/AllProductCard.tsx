import { IProducts } from '@/types/product.type';
import React from 'react';
import Link from "next/link";
import {
  Clock3,
  Flame,
  Star,
  Dumbbell
  
} from "lucide-react";

const AllProductCard = ({product} : {product:IProducts}) => {
    return (

<Link
  href={`/products/${product.id}`}>



         <div  className="block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg py-5">
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* Exercise image */}
      <div className="h-52 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-5">
        {/* Category tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {product.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-600"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout name */}
        <h2 className="text-xl font-extrabold uppercase text-gray-900">
          {product.name}
        </h2>

        {/* Equipment */}
        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
          <Dumbbell size={18} className="shrink-0" />
          <span>{product.equipment}</span>
        </div>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-3 divide-x divide-gray-200 rounded-xl bg-gray-50 py-4">
          <div className="flex flex-col items-center gap-1 px-2">
            <Clock3 size={20} className="text-red-500" />
            <span className="text-sm font-bold text-gray-800">
              {product.duration} min
            </span>
            <span className="text-xs text-gray-500">Duration</span>
          </div>

          <div className="flex flex-col items-center gap-1 px-2">
            <Flame size={20} className="text-red-500" />
            <span className="text-sm font-bold text-gray-800">
              {product.caloriesBurned} kcal
            </span>
            <span className="text-xs text-gray-500">Calories</span>
          </div>

          <div className="flex flex-col items-center gap-1 px-2">
            <Star size={20} className="fill-amber-400 text-amber-400" />
            <span className="text-sm font-bold text-gray-800">
              {product.rating}
            </span>
            <span className="text-xs text-gray-500">Rating</span>
          </div>
        </div>
      </div>
    </article>
    </div>
    </Link>
  );
}


export default AllProductCard;