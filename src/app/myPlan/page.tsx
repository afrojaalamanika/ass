"use client";

import React, { useState } from 'react';
import { useExerciseContext } from '../context/ExerciseContext';
import { useSegmentState } from 'next/dist/next-devtools/userspace/app/segment-explorer-node';

const page = () => {

const {myplan,setMyplan, saved, setSaved} = useExerciseContext();

const[activeTab,setActiveTab] = useState<"saved" | "myplan">("myplan")
// const [sortBy, setSortBy] = useState<"duration"|"rating" | "calolries">(
//     "duration"
// )

// const [orderedId, setOrderedId] = useState<number[]>([]);


// const currentList = activeTab === "myplan" ? myplan:saved;


    return (
<div className='contaner mx-auto px-7 py-8 space-y-5'>
     <h2 className='font-bold text-3xl'>MY PLAN</h2>   
      <h2>Cap of five lifts for today. Finish them, then load more.</h2>  
       <div className="stats shadow flex items-baseline-last">
  <div className="stat place-items-center">
    <div className="stat-title">Excersize</div>
    <div className="stat-value">31K</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-title">Calories</div>
    <div className="stat-value">4,200</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-title">Minutes</div>
    <div className="stat-value">1,200</div>
  </div>
</div>
{/* name of each tab group should be unique */}
<div className="tabs tabs-lift">
  <input type="radio" name="my_tabs_3" className="tab" aria-label="Todays Plan" checked={activeTab==="myplan"}onChange={() => setActiveTab("myplan")}/>
  <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

  <input type="radio" name="my_tabs_3" className="tab" aria-label="Saved" onChange={() => setActiveTab("saved")} defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>
<div className='flex gap-4'>
<option className=''> Sort by</option>
<select  className='select ms-auto'>
        
        
        <option>Duration</option>

    <option>Calories</option>
    <option>Rating</option>

</select>
</div>
</div>
    </div>
    );
};

export default page;