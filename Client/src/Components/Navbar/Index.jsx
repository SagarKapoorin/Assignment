import J from '../../assets/j.png'
import G from '../../assets/G.png'
import H from '../../assets/H.png'
import i from '../../assets/i.png'
import J2 from '../../assets/j2.png'
import G2 from '../../assets/G2.png'
import H2 from '../../assets/H2.png'
import i2 from '../../assets/i2.png'
import React, { useState, useEffect } from 'react';
import { useLocation ,useNavigate} from 'react-router-dom';
const Navbar=()=>{
    const location = useLocation();
    const navigate=useNavigate();
    const [currentPage, setCurrentPage] = useState('');
  
    useEffect(() => {
      setCurrentPage(location.pathname);
    }, [location]);
    // console.log(currentPage);
    return(
        <div className="fixed top-[89.3%] left-[0%] flex w-[100%]   items-center justify-center bg-[#242424]">
            <div className="container flex  flex-col  items-center cursor-pointer" onClick={()=>navigate("/")}>
            <img src={currentPage=='/'?G:G2} className='m-1'></img>
            <p className={`${currentPage === '/' ? 'text-[#D15439]' : 'text-[#B5B5B5]'} text-xs mb-1`}>page1</p>
            </div>
            
             <div className="container flex  flex-col  items-center cursor-pointer" onClick={()=>navigate("/page2")}>
             <img src={currentPage=='/page2'?J2:J} className='mt-2'></img>
             <p className={`${currentPage === '/page2' ? 'text-[#D15439]' : 'text-[#B5B5B5]'} text-xs mt-1`}>page2</p>
             </div>
           
            <div className="container flex  flex-col  items-center cursor-pointer"onClick={()=>navigate("/page3")}>
            <img src={currentPage=='/page3'?H2:H} className='mt-2'></img>
            <p className={`${currentPage === '/page3' ? 'text-[#D15439]' : 'text-[#B5B5B5]'} text-xs mt-1`}>page3</p>
            </div>
            
            <div className="container flex flex-col  items-center cursor-pointer" onClick={()=>navigate("/page4")}>
            <img src={currentPage=='/page4'?i2:i} className='mt-2'></img>
            <p className={`${currentPage === '/page4' ? 'text-[#D15439]' : 'text-[#B5B5B5]'} text-xs mt-1`}>page4</p>
            </div>
            
        </div>
    )
}
export default Navbar;