import AboutStyle from './about.module.css';
import Work1 from '../../assets/images/bcr-platinum.png';
import Work2 from '../../assets/images/bcr-customer.png';
import Github from '../../assets/images/github.png';
import Image from 'next/image';
import Link from 'next/link';

export const About = () => {
    return (
        <div className={AboutStyle['wrapper-about']}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className={AboutStyle['card-judul']}>
                            <h1>View My Work</h1>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className={AboutStyle['pembungkus']}>
                            <div className={AboutStyle['card-work-1']}>
                                <h1>Binar Car Rental</h1>
                                <Link href=''>
                                    <p>Visit Web</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className={AboutStyle['pembungkus']}>
                            <div className={AboutStyle['card-work-2']}>
                                <h1>Binar Car Rental Admin</h1>
                                <Link href=''>
                                    <p>Visit Web</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <div className={AboutStyle['pembungkus']}>
                            <div className={AboutStyle['card-work-3']}>
                                <h1>Landsnature</h1>
                                <Link href=''>
                                    <p>Visit Web</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className={AboutStyle['card-work-4']}>
                            <h1>Repository</h1>
                            <p>Feel free to explore and review my project on GitHub. You'll find all the code, documentation.</p>
                            <Link href='https://github.com/Hawinf'>
                                <p className={AboutStyle['ongithub']}>Github</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}