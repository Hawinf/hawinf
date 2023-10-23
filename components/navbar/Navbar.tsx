import NavbarStyle from './navbar.module.css';

export const Navbar = () => {
    return (
        <div className='container'>
            <div className={NavbarStyle['wrapper-navbar']}>
                <div className={NavbarStyle['navbar-logo']}>
                    <h5>HF</h5>
                    <h5>HF</h5>
                </div>
                <ul className={NavbarStyle['navbar-menu']}>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Works</a></li>
                    <li><a href='#'>Blog</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}