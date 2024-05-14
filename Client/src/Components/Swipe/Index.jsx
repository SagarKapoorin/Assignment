import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import A1 from '../../assets/AR1.png'
import A2 from '../../assets/AR2.png'
import A3 from '../../assets/AR3.png'
import { SwipeableButton } from "react-swipeable-button";
import { setCompletedAll } from '../../states';
const SwipeableComponent = () => {
  const [swiped, setSwiped] = useState(false);
  const dispatch=useDispatch();
  const completed=useSelector((state)=>state.goals_completed);
const onSuccess = () => {
  setTimeout(()=>{
    setSwiped(true);
    dispatch(setCompletedAll());
  },1500);
 
  
  };
  return (
    <>
   {!swiped && completed!=5 && <div className='container w-[100%] h-[60px] bg-[#D15439] rounded-[80px] mt-[20px] mb-[20px]  flex items-center justify-between p-2 m-1'>
   
    <div className="container"><SwipeableButton
                  onSuccess={onSuccess}
                  text="Swipe to Track All!"
                  text_unlocked="Tracked"
                  color="#D15439"
                /></div>
    
    </div>}
   </>
  );
};

export default SwipeableComponent;
