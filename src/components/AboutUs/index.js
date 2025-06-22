import image11 from '../../Assets/image11.png'
import './index.css'

const AboutUs = () => 
    <>
        <div className='aboutus-container' style={{ backgroundImage: `url(${image11})` }}>
            <div>
                <h1 className='about'>About Us</h1>
                <h1 className='aboutus-des'>Where Innovation Meets Execution</h1>
            </div>
            <div>
                <p className='aboutusparagraph'>Websort builds websites, apps, and digital marketing solutions to help you grow online. Based in Bangalore, we focus on smart design, strong tech, and real results.We specialize in web development, mobile app development, UI/UX design, and digital marketing—delivering responsive websites, high-performance Android/iOS apps, and visually engaging interfaces. Our digital marketing expertise spans SEO, PPC, social media marketing, and content creation, helping businesses grow and connect with their ideal audienc.e.</p>
                <button className='knowmore-button'>Know More</button>
            </div>
        </div>
    </>
export default AboutUs