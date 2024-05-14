import { useDispatch, useSelector } from "react-redux";
import F from "../../assets/F.png";
const UpperBar=()=>{
    const complete=useSelector((state)=>state.goals_completed);
    return(
        <div className="progress_bar">
           <img src={F} className="w-[320px] h-[320px] absolute top-[-60px] left-[-60px]"></img>
           <div className="container ml-[90px] w-[350px] flex flex-col justify-center items-center gap-[1px] ">
            <p className="text-[15px] s text-right font-bold text-white">Yours Daily Goals Almost done</p>
            <p className="text-[15px] text-white pr-[101px] mb-1 ">{complete} Of 5 Completed</p>
            <progress className="progress-bara" value={(complete / 5) * 100} max={100}></progress>


            <p className="text-right text-[15px] text-white mr-[-110px]">{(complete/5)*100}%</p>
           </div>
            </div>
    )
}
export default UpperBar;