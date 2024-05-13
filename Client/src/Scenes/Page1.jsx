import Goals from "../Components/Goals/Index";
import { useNavigate } from "react-router-dom";
import { setCompletedAll,setGoals,setGoalsTrue } from "../states";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const Page1=()=>{
    const dispatch = useDispatch();
    useSelector((state)=>console.log(state.goals));
    const goals_data = useSelector((state) => state.goals);
    const completed = useSelector((state) => state.goals_completed);
    return(
        <div className="container">
            <h1>Todays Goals</h1>
            {goals_data.map(({ name, img, Color, completed }) => (
      !completed && <Goals
        name={name}
        img={img}
        Color={Color}
        key={name} 
      />
    ))}
        </div>
    )
}
export default Page1