import backimg1 from '../../Assets/backimg1.png'
import './index.css'

const Toplayout = () => 
    <>
        <div className='layout-container' style={{ backgroundImage: `url(${backimg1})` }}>
            <h1 className='layout-des'>Digitizing Ideas with Clean Code & Modern Design</h1>
            
                <p className='layoutparagraph'>At Websort, we turn digital visions into reality with expert web and app development, UI/UX design, and digital marketing. Based in Bangalore, we craft responsive websites, innovative mobile apps, and drive results through SEO, PPC, and social media strategies.</p>
                <button className='btn'>Contact Us</button>
                <button className='btn'>Know More</button>
           
        </div>
    </>
export default Toplayout