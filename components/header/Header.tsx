import Link from 'next/link';
import HeaderStyle from './header.module.css';
import { useState, useEffect } from 'react';

export const Header = () => {
    const [hidden, setHidden] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const texts = ["HELLO,"];
    
    useEffect(() => {
      const switchText = () => {
      setHidden(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1));
      };

      const switchInterval = setInterval(switchText, 6000); 

      return () => clearInterval(switchInterval);
      }, []);


      
      


    return (
        // <div className={HeaderStyle['header-wrapper']}>
        //     <div className={HeaderStyle['text-container']}>
        //     {hidden?
        //         <h5 className={HeaderStyle['head-1']}>WORK</h5>:<></>} 
        //     </div>
        // </div> 
        
        // <div className={HeaderStyle['header-wrapper']}>
        <>

            {
              hidden ? 
              <div className='container'>
                <div className={HeaderStyle['header']}>
                  <p className={HeaderStyle['head-desc']}> Hello my name is,</p>
                  <h5 className={HeaderStyle['head-1']}>HAWIN<span className={HeaderStyle['span']}>FAHMI</span></h5>
                  <p className={HeaderStyle['head-desc-1']}>I am presently in the process of acquiring skills in <span>Frontend Development</span>, focusing on building the user interfaces of websites and web applications.</p>
                  <Link href="https://hawinf54@gmail.com" className={HeaderStyle['contact']}>
                    Contact
                  </Link>
                </div>
              </div>
            :
              
              <>
                <div className={HeaderStyle["wrapper"]}>
                  <svg className={HeaderStyle['svg']}>
                    <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                        {texts[currentIndex]}
                    </text>
                  </svg>
                </div>
              </>
            }
            
        </>
        // </div>
    )
}

