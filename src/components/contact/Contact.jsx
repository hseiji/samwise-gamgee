import './contact.css';
import Phone from '../../images/phone.png';
import Email from '../../images/email.png';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';



export default function Contact() {
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_uv06mmf', 
            'template_dioducw', 
            formRef.current,
            'user_Pm1k4fIWGyiryTPWQlT2g'
        )
        .then(
            (result) => {
                console.log(result.text);
            }, (error) => {
            console.log(error.text);
            }
        );

    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Please contact me for any questions</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +0 123 555 9999
                        </div>
                    </div>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            samwise@hobbit.com
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Share your thoughts and concerns with me.</b> I am pleased to meet you and hope we can talk again!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name"/>
                        <input type="text" placeholder="Subject" name="user_subject"/>
                        <input type="text" placeholder="Email" name="user_email"/>
                        <textarea rows="5" placeholder="Message" name="message"></textarea>
                        <button>Submit</button>
                        {done && "Your message was sent!" }
                    </form>
                </div>
            </div>
        </div>
    )
}
