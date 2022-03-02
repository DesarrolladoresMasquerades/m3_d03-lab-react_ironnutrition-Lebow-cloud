import food from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import NewFood from "./components/AddNewFood";
import Search from "./components/Search";
import "./App.css";


function App() {
  const [foodList, setFoodList] = useState(food);

  const [foodListCopy, setFoodListCopy] = useState(food);

  function newFood(addFood) {
    setFoodList([...foodList, addFood]);
    setFoodListCopy([...foodListCopy, addFood]);
  }

  function searchFood(str) {
    const strLength = str.length;

    setFoodList(foodListCopy.filter((elem)=>{return ( elem.name.toLowerCase().slice(0,strLength) === str.toLowerCase().slice(0,strLength))
    }));
  }

  function deleteFood(obj){
    
    setFoodList(foodList.filter((dish)=>{
     return dish !== obj
    }))
    
  }

  return (
    <div className="App">
      <h1>Food List</h1>
      <Search searchFood={searchFood} />
      <NewFood newFood={newFood} />
      {foodList.map((food) => (
      <FoodBox food={food} deleteFood={deleteFood}/>

      ))}
    </div>
  );
}

export default App;
