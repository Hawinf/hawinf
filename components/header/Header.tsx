import HeaderStyle from './header.module.css';
import { useState, useEffect } from 'react';

export const Header = () => {
    const [hidden, setHidden] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const texts = ["HELLO WORLD"];
    
    useEffect(() => {
      const switchText = () => {
      setHidden(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1));
      };

      const switchInterval = setInterval(switchText, 3000); 

      return () => clearInterval(switchInterval);
      }, []);


      
      


    return (
        // <div className={HeaderStyle['header-wrapper']}>
        //     <div className={HeaderStyle['text-container']}>
        //     {hidden?
        //         <h5 className={HeaderStyle['head-1']}>WORK</h5>:<></>} 
        //     </div>
        // </div> 
        
        <div className={HeaderStyle['header-wrapper']}>
            
            {
              hidden ? <h5 className={HeaderStyle['head-1']}>hello</h5> : <><h5 className={HeaderStyle['head-1']}>{texts[currentIndex]}</h5></>
            }
            
        </div>
    )
}





// useEffect(() => {
//     const timer = setTimeout(() => {
//         setHidden(false);
//     }, 4000)

//     return () => clearTimeout(timer);
// }, []);