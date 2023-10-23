import HeaderStyle from './header.module.css';
import { useState, useEffect } from 'react';

export const Header = () => {
    // const [hidden, setHidden] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const texts = ["WORK", "THAT", "MATTER", "HELLO WORLD", "HAWINF"];
    
    useEffect(() => {
        const switchText = () => {
            // setHidden(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        };
    
        const switchInterval = setInterval(switchText, 2500); // Show each text for 2 seconds
    
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
            <h5 className={HeaderStyle['head-1']}>{texts[currentIndex]}</h5>
        </div>
    )
}





// useEffect(() => {
//     const timer = setTimeout(() => {
//         setHidden(false);
//     }, 4000)

//     return () => clearTimeout(timer);
// }, []);