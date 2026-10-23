"use cache"

export const getAllproducts = async() =>{
    const res = await fetch('https://api.api-store.workers.dev/api/fitlog', {cache: "no-store"})
return res.json()

}


export const getSingleWorkout = async(id:String) =>{
    const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`)

return res.json();

}






