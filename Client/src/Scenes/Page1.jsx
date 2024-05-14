import Goals from "../Components/Goals/Index";
import Heart from '../assets/Heart.png'
import BarChart from "../Components/Chart/Index.jsx";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar/Index";
import SwipeableComponent from "../Components/Swipe/Index.jsx";
import UpperBar from '../Components/UpperBar/Index.jsx';
const Page1=()=>{
  const data = [
    { Day: '28/4', Completion: 92 }, 
    { Day: '30/4', Completion: 100 }, 
    { Day: '02/5', Completion: 98 }, 
    { Day: '05/5', Completion: 90 }, 
    { Day: '11/5', Completion: 84 }, 
    { Day: '15/5', Completion: 82 }, 
    { Day: '16/5', Completion: 80 }, 
    { Day: '22/5', Completion: 80 }, 
  ];
  
    const dispatch = useDispatch();
    const goals_data = useSelector((state) => state.goals);
    const completed = useSelector((state) => state.goals_completed);
    return(
        <div className="container h-[1050px]">
          <UpperBar/>
            <div className="container flex justify-between p-2">
            <h1 className="text-white">Todays Goals</h1>
            <img src={Heart}></img>
            </div>
          {completed==5 && <h1 className="text-xl text-white font-bold mt-3 mb-5">All Task for Today is Completed</h1>}
            {goals_data.map(({ name, img, Color, completed }) => (
      !completed && <Goals
        name={name}
        img={img}
        Color={Color}
        key={name} 
      />
    ))}
    <SwipeableComponent/>
    <div className="container  mx-auto w-[100%]  bg-[#282828]  rounded-lg pl-1 pt-2 pb-4">
    <BarChart data={data}/>
    </div>
    
    <Navbar/>
        </div>
    )
}
export default Page1