import './SendContact.css'

export default function SendContact() {
    return (
        <form className='contain-sendContact'>
            <h3>Contact me</h3>
            <div className='sendContact-name'>
                <label>Fullname</label>
                <input type='text' placeholder='input name...'/>
            </div>
            <div className='sendContact-email'>
                <label>Email</label>
                <input type='text' placeholder='input email...'/>
            </div>
            <div className='sendContact-message'>
                <label>Message</label>
                <textarea rows={5} placeholder='input message...'/>
            </div>
            <button className='btn btn-success button-contact'>Send</button>
        </form>
    );
}