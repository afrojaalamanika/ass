'use client';


import {
  CalendarPlus,
  Bookmark,
} from "lucide-react";
import { useExerciseContext } from '@/app/context/ExerciseContext';
import { IProducts } from '@/types/product.type';
import toast from 'react-hot-toast';
const DetailsPageButton = ({product} : {product:IProducts}) => {


const {myplan, setMyplan, saved, setSaved} = useExerciseContext();

const alreadInSaved =saved.some((item) => item.id === product.id)
const alreadInMyPlan =myplan.some((item) => item.id === product.id)

const handleAddToMyPlan =() =>{
    if(alreadInMyPlan){
        toast.error("already in My Plan")
        return;
    }

    setMyplan(prev=>[...prev, product])
    toast.success("Added top My Plan");
}
const handleAddToSaved =() =>{
    if(alreadInSaved){
        toast.error("already in Saved")
        return;
    }

    setSaved(prev=>[...prev, product])
    toast.success("Added top Saved");
}


    return (
       <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button 
              type="button" 
disabled={alreadInMyPlan}
onClick={handleAddToMyPlan}

              className="flex flex-1 items-center justify-center gap-2 rounded-xl disabled:cursor-not-allowed disabled:pointer-events-auto bg-orange-500 px-5 py-4 font-bold text-white transition hover:bg-orange-600"
            >
              <CalendarPlus size={19} />
              Add to todays plan
            </button>

            <button
              type="button"
              onClick={handleAddToSaved}
              disabled={alreadInSaved}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl disabled:cursor-not-allowed disabled:pointer-events-auto border border-gray-300 bg-white px-5 py-4 font-bold text-gray-700 transition hover:bg-gray-100"
            >
              <Bookmark size={19} />
              Save for later
            </button>
          </div>
    );
};

export default DetailsPageButton;