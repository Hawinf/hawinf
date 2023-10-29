import FooterStyle from './footer.module.css';
import Email from '../../assets/images/gmail.png';
import IG from '../../assets/images/instagram.png';
import TW from '../../assets/images/twitter.png';
import Image from 'next/image';
import Link from 'next/link';


export const Footer = () => {
    return (
        <div  className={FooterStyle['wrapper-footer']}>
            <div className='container'>
                <div className={FooterStyle['footer-content']}>
                        <div className={FooterStyle['footer-left']}>
                            <h1 className={FooterStyle['connect']}>Let's <span>Connect</span></h1>
                            <p className={FooterStyle['copyright']}>© 2023 Hawinf. All rights reserved</p>
                        </div>
                        <div >
                            <div className={FooterStyle['footer-right']}>
                                <Image src={Email} 
                                        alt="Image Description"
                                        width="100"      
                                        height="100" 
                                        placeholder='blur'
                                        className={FooterStyle['gmail']}
                                />
                                <h6>Hawinf54@gmail.com</h6>
                            </div>
                            <div className={FooterStyle['sosmed']}>
                                <p>Follow Me On</p>
                                <Link href=''>
                                    <Image src={IG} 
                                        alt="Image Description"
                                        width="100"      
                                        height="100" 
                                        placeholder='blur'
                                        className={FooterStyle['icon-sosmed']}
                                    />
                                </Link>
                                <Link href=''>
                                    <Image src={TW} 
                                        alt="Image Description"
                                        width="100"      
                                        height="100" 
                                        placeholder='blur'
                                        className={FooterStyle['icon-sosmed']}
                                    />
                                </Link>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}