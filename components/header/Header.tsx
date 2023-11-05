import Link from 'next/link';
import HeaderStyle from './header.module.css';
import { useState, useEffect } from 'react';



export const Header = () => {
    const [hidden, setHidden] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const texts = ["HELLO,"];

    const first = document.getElementById('first') as HTMLElement | null;
    const second = document.getElementById('second') as HTMLElement | null;
    const third = document.getElementById('third') as HTMLElement | null;
    const fourth = document.getElementById('fourth') as HTMLElement | null;
    const fifth = document.getElementById('fifth') as HTMLElement | null;

    const animate = (element: HTMLElement | null, position: number) => {
      // element.style.transform = `translateX(${position}px)`
      if (element) {
        element.style.transform = `translateX(${position}px)`;
      }
    }

      let lastKnownScrollPosition = 1;
    
      document.addEventListener('scroll', function(e) {
        lastKnownScrollPosition = window.scrollY;
    
        window.requestAnimationFrame(function() {
          animate(first, lastKnownScrollPosition * 0.2);
          animate(second, lastKnownScrollPosition * -0.2);
          animate(third, lastKnownScrollPosition * 0.2);
          animate(fourth, lastKnownScrollPosition * -0.2);
          animate(fifth, lastKnownScrollPosition * 0.2);
        });
      });
    
    
    


    
    useEffect(() => {
      const switchText = () => {
      setHidden(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1));
      };

      const switchInterval = setInterval(switchText, 6000); 

      return () => clearInterval(switchInterval);
      }, []);


      
      


    return (
        <>

            {
              hidden ? 
              <div className='container'>

                

                <div className={HeaderStyle['header']}>
                  <p id="first" className={HeaderStyle['head-desc']} data-aos="fade-left">HAWINF</p>
                  <p id="second" className={HeaderStyle['head-desc1']} data-aos="fade-right">process of</p>
                  <p id="third" className={HeaderStyle['head-desc2']} data-aos="fade-left">acquiring </p>
                  <p id="fourth" className={HeaderStyle['head-desc3']} data-aos="fade-right">Frontend</p>
                  <p id="fifth" className={HeaderStyle['head-desc4']} data-aos="fade-left">Development</p>
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
    )
}
    
