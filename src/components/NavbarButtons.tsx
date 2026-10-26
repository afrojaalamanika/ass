import React from 'react';
import Link from 'next/link';
import { useExerciseContext } from '@/app/context/ExerciseContext';
const NavbarButtons = () => {
const {myplan, saved} = useExerciseContext()

    return (
        <div>
            <Link className='btn' href={"/myPlan"}>
            {" "}
<button>Plan</button>
<span>({myplan.length})</span>


            </Link>
            <Link className='btn' href={"/myPlan"}>
            {" "}
<button>Saved</button>
<span>({saved.length})</span>

            </Link>
        </div>
    );
};

export default NavbarButtons;