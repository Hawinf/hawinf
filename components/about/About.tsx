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
                        <div className={AboutStyle['card-work-1']}>
                            <h1>Binar Car Rental</h1>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className={AboutStyle['card-work-2']}>
                            <h1>Binar Car Rental Admin</h1>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <div className={AboutStyle['card-work-3']}>
                            <h1>Landsnature</h1>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className={AboutStyle['card-work-4']}>
                            <h1>Repository</h1>
                            <p>Feel free to explore and review my project on GitHub. You'll find all the code, documentation, and any other materials related to the project, and I'd appreciate your feedback and contributions if you have any.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}