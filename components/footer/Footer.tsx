import FooterStyle from './footer.module.css';


export const Footer = () => {
    return (
        <div  className={FooterStyle['wrapper-footer']}>
            <div className='container'>
                <div className={FooterStyle['footer-content']}>
                        <div className={FooterStyle['footer-left']}>
                            <h1 className={FooterStyle['connect']}>Let's <span>Connect</span></h1>
                            <p className={FooterStyle['copyright']}>© 2023 Hawinf. All rights reserved</p>
                        </div>
                        <div className={FooterStyle['footer-right']}>
                            <h6>Hawinf54@gmail.com</h6>
                        </div>
                </div>
            </div>
        </div>
    )
}