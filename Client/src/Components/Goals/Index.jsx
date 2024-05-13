import A from "../../../src/assets/E.png";
import Tick from "../../../src/assets/Tick.png";
const Goals=({name , img , Color})=>{
    return(
       <div className=" mx-auto w-[100%]  bg-[#282828]  rounded-lg flex items-center justify-center gap-12">
        <img src={A} className="inline-block m-2  w-[32px] h-[32px]"></img>
        <p className="inline-block m-2 text-[white] text-lg">workout</p>

        <div className="inline-block w-[32px] h-[32px] bg-[#9E4CB8] rounded-md">
        <img src={Tick} className="inline-block w-[12px] h-[12px]"></img>
        </div>
       
       </div>
    )
}
export default Goals;