import formimg from '../../Assets/formimg.png'
import './index.css'

const Form = () => 
    <>
        <div className='form-container' style={{ backgroundImage: `url(${formimg})` }}>
        <div className="contact-form">
                <h2>Questions? We're here to answer them!</h2>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Number" />
                <textarea placeholder="Message"></textarea>
                <button>Submit</button>
        </div>
        </div>
    </>
export default Form
