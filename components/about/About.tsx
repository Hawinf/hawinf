import AboutStyle from './about.module.css';
import Work1 from '../../assets/images/bcr-platinum.png';
import Work2 from '../../assets/images/bcr-customer.png';
import Image from 'next/image';
import Link from 'next/link';

export const About = () => {
    return (
        <div className={AboutStyle['wrapper-about']}>
            {/* <div className='container'> */}

            <div className='container'>
                <h5 className={AboutStyle['about-judul']}>My Latest Works</h5>
                <div>
                    <div className={AboutStyle['work-1']}>
                        <Image src={Work1} 
                                    className={AboutStyle['work-img']}
                                    alt="Image Description"
                                    width="100"      
                                    height="100" 
                                    placeholder='blur'
                        />
                        <h6 className={AboutStyle['work-judul']}>Binar Car Rental</h6>
                        <p className={AboutStyle['work-desc']}>I created websites by combining HTML for structure, CSS for styling, and React for dynamic interactivity to provide a visually appealing and interactive user experience.</p>
                        <div className={AboutStyle['button-section']}>
                            <Link href='' className={AboutStyle['button-left']}>
                                Code
                            </Link>
                            <Link href='' className={AboutStyle['button-right']}>
                                Site
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div>
                    <div className={AboutStyle['work-1']}>
                        <Image src={Work2} 
                                    className={AboutStyle['work-img']}
                                    alt="Image Description"
                                    width="100"      
                                    height="100" 
                                    placeholder='blur'
                        />
                        <h6 className={AboutStyle['work-judul']}>Binar Car Rental</h6>
                        <p className={AboutStyle['work-desc']}>I created websites by combining HTML for structure, CSS for styling, and React for dynamic interactivity to provide a visually appealing and interactive user experience.</p>
                        <div className={AboutStyle['button-section']}>
                            <Link href='' className={AboutStyle['button-left']}>
                                Code
                            </Link>
                            <Link href='' className={AboutStyle['button-right']}>
                                Site
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div>
                    <div className={AboutStyle['work-1']}>
                        <Image src={Work1} 
                                    className={AboutStyle['work-img']}
                                    alt="Image Description"
                                    width="100"      
                                    height="100" 
                                    placeholder='blur'
                        />
                        <h6 className={AboutStyle['work-judul']}>Binar Car Rental</h6>
                        <p className={AboutStyle['work-desc']}>I created websites by combining HTML for structure, CSS for styling, and React for dynamic interactivity to provide a visually appealing and interactive user experience.</p>
                        <div className={AboutStyle['button-section']}>
                            <Link href='' className={AboutStyle['button-left']}>
                                Code
                            </Link>
                            <Link href='' className={AboutStyle['button-right']}>
                                Site
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* </div> */}
        </div>
    )
}