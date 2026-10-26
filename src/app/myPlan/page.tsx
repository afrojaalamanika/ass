"use client";
import Image from 'next/image';

import { useRouter } from "next/navigation";

import React, { useState } from 'react';
import { useExerciseContext } from '../context/ExerciseContext';
const Myplan = () => {
const router = useRouter();


const {myplan, saved, setMyplan, setSaved} = useExerciseContext();

const [completedIds, setCompletedIds] = useState<number[]>([]);

const[activeTab,setActiveTab] = useState<"saved" | "myplan">("myplan")

const [sortBy, setSortBy] = useState<"duration"|"caloriesBurned"|"rating"> (
  "duration"
)

// console.log(sortBy);
const currentList = activeTab === "myplan" ? myplan:saved;

const sortedList= [...currentList].sort((a,b) =>{
  if(sortBy ==="duration") return a.duration - b.duration; 
  if(sortBy==='caloriesBurned')return a.caloriesBurned - b.caloriesBurned; 
  if(sortBy==='rating')return a.rating - b.rating;
return 0;

})


const totalProduct = currentList.length;
const totalCalories = currentList.reduce((sum,item) => sum + item.caloriesBurned, 0)
const totalMinutes = currentList.reduce((sum,item) => sum + item.duration, 0)
// const totalExcersize = currentList.reduce((sum,item) => sum + item.id, 0)






const renderTabConten = () => {
  if (sortedList.length === 0) {
    return <h2>Nothing Here</h2>;
  }

  return (
    <div className="space-y-4">
      {sortedList.map((item) => (
        <div
          key={item.id}
          className={`card card-side bg-base-100 border border-base-300 shadow-sm p-4 gap-4 transition-opacity ${
            activeTab === "myplan" && completedIds.includes(item.id)
              ? "opacity-40"
              : "opacity-100"
          }`}
        >
          <figure className="w-32 shrink-0">
            <Image
              src={item.image}
            alt='image'
            width={128}
  height={128}
              className="h-32 w-full rounded-lg object-cover"
            />
          </figure>

          <div className="card-body p-0 gap-3">
            <div>
              
              <p className="text-sm text-base-content/70">
                Equipment: {item.equipment}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <span>⏱️ {item.duration} min</span>
              <span>🔥 {item.caloriesBurned} kcal</span>
              <span>⭐ {item.rating}</span>
            </div>

            <div className="card-actions flex-wrap items-center">
              <button
                className="btn btn-sm btn-outline"
                onClick={() => router.push(`/products/${item.id}`)}
              >
                View Details
              </button>

              {activeTab === "myplan" && (
                <button
                  className="btn btn-sm btn-success"
                  disabled={completedIds.includes(item.id)}
                  onClick={() => {
                    setCompletedIds((prev) =>
                      prev.includes(item.id)
                        ? prev
                        : [...prev, item.id]
                    );
                  }}
                >
                  {completedIds.includes(item.id)
                    ? "Completed"
                    : "Mark as Done"}
                </button>
              )}

              <button
                className="btn btn-sm btn-ghost text-error"
                aria-label="Remove workout"
                onClick={() => {
                  if (activeTab === "myplan") {
                    setMyplan((prev) =>
                      prev.filter((workout) => workout.id !== item.id)
                    );
                  } else {
                    setSaved((prev) =>
                      prev.filter((workout) => workout.id !== item.id)
                    );
                  }
                }}
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};






    return (
<div className='contaner mx-auto px-7 py-8 space-y-5'>
     <h2 className='font-bold text-3xl'>MY PLAN</h2>   
      <h2>Cap of five lifts for today. Finish them, then load more.</h2>  
       <div className="stats shadow flex items-baseline-last">
  <div className="stat place-items-center">
    <div className="stat-title">Excersize</div>
    <div className="stat-value">{totalProduct}</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-title">Calories</div>
    <div className="stat-value">{totalCalories}</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-title">Minutes</div>
    <div className="stat-value">{totalMinutes}</div>
  </div>
</div>
{/* name of each tab group should be unique */}
<div className="flex  justify-between gap-2">

  <div className="tabs tabs-lift">
    <input
      type="radio"
      name="my_tabs_3"
      className="tab"
      aria-label="Todays Plan"
      checked={activeTab === "myplan" }
      onChange={() => setActiveTab("myplan")}
    />
<div className="bg-base-100 border-base-300 p-6">
 {activeTab === "myplan" && renderTabConten()}
</div>
    <input
      type="radio"
      name="my_tabs_3"
      className="tab"
      aria-label="Saved"
      checked={activeTab === "saved"}
      onChange={() => setActiveTab("saved")}
    />
<div className="bg-base-100 border-base-300 p-6">
{activeTab === "saved" && renderTabConten()}
</div>  </div>

  <div className="flex items-center gap-3">
    <label>Sort By</label>

    <select onChange={(e) =>
      setSortBy(e.target.value as "duration" | "caloriesBurned" | "rating" )
    }
      className="select">
      <option value='duration'>Duration</option>
      <option value='caloriesBurned'>Calories</option>
      <option value='rating'>Rating</option>
    </select>
  </div>

</div>

    </div>
    );
};

export default Myplan;