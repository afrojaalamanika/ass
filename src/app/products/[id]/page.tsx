
import { getSingleWorkout } from "@/lib/api";
import Image from "next/image";
import {
  Clock3,
  Flame,
  Star,
  Dumbbell,
  Gauge,
  Repeat,
 
} from "lucide-react";
import DetailsPageButton from "@/components/DetailsPageButton";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function WorkoutDetails({ params }: Props) {
  const { id } = await params;
  const workout = await getSingleWorkout(id);

  const specs = [
    { label: "Equipment", value: workout.equipment, Icon: Dumbbell },
    { label: "Difficulty", value: workout.difficulty, Icon: Gauge },
    { label: "Sets", value: workout.sets, Icon: Repeat },
    { label: "Reps", value: workout.reps, Icon: Repeat },
    { label: "Duration", value: `${workout.duration} min`, Icon: Clock3 },
    {
      label: "Calories",
      value: `${workout.caloriesBurned} kcal`,
      Icon: Flame,
    },
    { label: "Rating", value: workout.rating, Icon: Star },
  ];

  return (
    <main className="container mx-auto mt-6  bg-gray-50 py-20 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-12">

        {/* Left: Workout Image */}
        <div className="relative overflow-hidden rounded-3xl bg-gray-200 sm:min-h-[550px]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            unoptimized
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-extrabold uppercase text-gray-900 sm:text-4xl">
            {workout.name}
          </h1>

          <p className="mt-4 leading-7 text-gray-600">
            {workout.description}
          </p>

          
          <div className="mt-5 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle: string) => (
              <span
                key={muscle}
                className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Key Specs */}
          <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900">
              Key Specifications
            </h2>

            <div className="mt-4 divide-y divide-gray-100">
              {specs.map(({ label, value, Icon }) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 py-3"
                >
                  <span className="flex items-center gap-3 text-sm text-gray-500">
                    <Icon size={18} className="text-orange-500" />
                    {label}
                  </span>

                  <span className="text-right text-sm font-bold text-gray-900">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Instructions */}
          <section className="mt-8">
            <h2 className="text-xl font-extrabold uppercase text-gray-900">
              Instructions
            </h2>

            <ol className="mt-5 space-y-4">
              {workout.instructions.map(
                (instruction: string, index: number) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="pt-1 text-sm leading-6 text-gray-600">
                      {instruction}
                    </p>
                  </li>
                )
              )}
            </ol>
          </section>

          {/* Action Buttons */}
          <DetailsPageButton product={workout}></DetailsPageButton>

        </div>
      </div>
    </main>
  );
}
