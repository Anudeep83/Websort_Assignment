import WebsortNav from '../../Assets/WebsortNav.png'
import './index.css'

const NavBar = () => 
    <>
        <nav>
            <div className='nav-container'>
                <img src = {WebsortNav} alt = "websort-logo" className='logo'/>
                <div className="nav-details-wrapper"> 
                <div className="nav-details">
                    <p>About</p>
                    <p>Services</p>
                    <p>Projects</p>
                    <p>Careers</p>
                </div>
                <p className='contact'>Contact Us</p>
                </div>
        </div>
        </nav>
    </>


export default NavBar