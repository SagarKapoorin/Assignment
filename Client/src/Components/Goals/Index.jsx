import { useDispatch } from "react-redux";
import A from "../../../src/assets/A.png";
import B from "../../../src/assets/B.png";
import C from "../../../src/assets/C.png";
import D from "../../../src/assets/D.png";
import E from "../../../src/assets/E.png";
import Tick from "../../../src/assets/Tick.png";
import { setGoals, setGoalsTrue } from "../../states";
const Goals=({name , img , color})=>{
  let k;
  let imageSrc;
  switch (img) {
    case 'A':
      imageSrc = A;
      k='bg-[#D15439]';
      break;
    case 'B':
      imageSrc = B;
      k='bg-[#81B47D]';
      break;
    case 'C':
      imageSrc = C;
      k='bg-[#5A92CB]';
      break;
    case 'D':
      imageSrc = D;
      k='bg-[#9E4CB8]';
      break;
    case 'E':
      imageSrc = E;
      k='bg-[#63A7A7]';
      break;
    default:
      imageSrc = A;
      k='bg-[#D15439]'; 
      break;
  }
    const dispatch=useDispatch();
    
    let s = `inline-block w-[32px] h-[32px] ${k} rounded-md ml-70 cursor-pointer`;

   
   
    return(
       <div className=" mx-auto w-[100%]  bg-[#282828]  rounded-lg flex items-center justify-between p-2 m-1 ">
        <img src={imageSrc} className="inline-block m-2  w-[32px] h-[32px] self-start"></img>
        <p className="inline-block m-2 text-[white] text-lg ml-13">{name}</p>

        <div className={s} onClick={()=>{dispatch(setGoalsTrue(name)); dispatch(setGoals())}}>
        <img src={Tick} className="inline-block w-[12px] h-[12px] "></img>
        </div>
       
       </div>
    )
}
export default Goals;