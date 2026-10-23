export interface IProducts {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

export interface IProductContext{
  myplan:IProducts[],
  saved:IProducts[],
  setMyplan: React.Dispatch<React.SetStateAction<IProducts[]>>,
  setSaved:React.Dispatch<React.SetStateAction<IProducts[]>>
}










