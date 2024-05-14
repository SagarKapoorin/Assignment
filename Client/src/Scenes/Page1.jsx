import Goals from "../Components/Goals/Index";
import { useNavigate } from "react-router-dom";
import A from '../assets/A.png'
import { setCompletedAll,setGoals,setGoalsTrue } from "../states";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Navbar from "../Components/Navbar/Index";
const Page1=()=>{
    const dispatch = useDispatch();
    useSelector((state)=>console.log(state.goals));
    const goals_data = useSelector((state) => state.goals);
    const completed = useSelector((state) => state.goals_completed);
    return(
        <div className="container">
            <div className="container flex justify-between p-2">
            <h1>Todays Goals</h1>
            <img src={A}></img>
            </div>
          
            {goals_data.map(({ name, img, Color, completed }) => (
      !completed && <Goals
        name={name}
        img={img}
        Color={Color}
        key={name} 
      />
    ))}
    <Navbar/>
        </div>
    )
}
export default Page1