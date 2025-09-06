import { useRef } from 'react';
import './SendContact.css'
import { addContactSecure } from '../../Api/GeneralApi';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SendContact() {
    const inputName = useRef(null);
    const inputEmail = useRef(null);
    const inputMessage = useRef(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addContactSecure({
                fullname: inputName.current.value,
                email: inputEmail.current.value,
                message: inputMessage.current.value
            })
        } catch (error) {
            toast.error('Send failed')
        } finally {
            toast.success('Send successful')
            inputName.current.value = ''
            inputEmail.current.value = ''
            inputMessage.current.value = ''
        }


    }
    return (
        <form className='contain-sendContact mt-3' onSubmit={handleSubmit}>
            <h3>Contact me</h3>
            <div className='sendContact-name'>
                <label>Fullname</label>
                <input type='text' placeholder='input name...' required ref={inputName} />
            </div>
            <div className='sendContact-email'>
                <label>Email</label>
                <input type='email' placeholder='input email...' required ref={inputEmail} />
            </div>
            <div className='sendContact-message'>
                <label>Message</label>
                <textarea rows={5} placeholder='input message...' ref={inputMessage} />
            </div>
            <button type='submit' className='button-contact' style={{ background: '#11BA11' }} >Send</button>
        </form>
    );
}