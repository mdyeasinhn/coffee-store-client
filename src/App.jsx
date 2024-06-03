import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./Components/CoffeeCard"
import coffeeIcon from '../src/assets/Img/Vector.png';
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className="container mx-auto">
      
     <div  className="my-20">
     <h1 className="text-6xl text-center">Our Popular Products</h1>
     <div className="flex justify-center my-4" >
     <button className="border border-black btn bg-[#E3B577] text-white">Add coffee <img src={coffeeIcon} alt="" /></button>

     </div>
     </div>
    <div className="grid md:grid-cols-2 gap-6">
    {
        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
      }
      
    </div>
    </div>
  )
}

export default App
