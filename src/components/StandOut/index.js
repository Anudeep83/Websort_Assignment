import Standoutimage from '../../Assets/Standoutimage.png'
import './index.css'

const StandOut = () => 
    <>
        <div className='standout-container' style={{ backgroundImage: `url(${Standoutimage})` }}>
            <h1 className='standout-des'>Why We Stand Out</h1>
            <p className='standoutparagraph'>At Websort, we don’t just build digital products — we build careers. By joining our team, you become part of a creative and collaborative environment that values innovation, continuous learning, and personal growth.</p>
        </div>
    </>
export default StandOut