import achievementsimg from '../../Assets/achievementsimg.png'
import './index.css'

const Achievements = () => 
    <>
        <div className='achieve-container' style={{ backgroundImage: `url(${achievementsimg})` }}>
            <h1 className='achieve-des'>One of our proudest achievements.</h1>
            <p className='aboutusparagraph'>A standout from our portfolio, this project exemplifies the quality, creativity, and performance we bring to every solution. 
                                                      It's a true reflection of our commitment to excellence.</p>
            <button className='knowmore-button'>Know More</button>
        </div>
    </>
export default Achievements