import { useState } from 'react';
import imageMySelf from '../../assets/AnhMyself.jpg'
import './ChatRealtime.css'
import imageGoogle from '../../assets/google.png'

export default function ChatRealTime() {
    const [user, setUser] = useState(false);

    const [message, setMessage] = useState([
        { userImg: imageMySelf, userName: 'Hoang Hai Duong', messsage: 'Hello' },
        { userImg: imageMySelf, userName: 'Hoang Hai Duong', messsage: 'Hello' },
        { userImg: imageMySelf, userName: 'Hoang Hai Duong', messsage: 'Hello' },
        { userImg: imageMySelf, userName: 'Hoang Hai Duong', messsage: 'Hello' },
        { userImg: imageMySelf, userName: 'Hoang Hai Duong', messsage: 'Hello' },
    ]);

    return (
        <div className='contain-chatRealtime mt-3'>
            <div className='title'>
                <h2>Room chat</h2>
            </div>
            {user &&
                <div className='contain-infor'>
                    <div className='infor-detail'>
                        <img src={imageMySelf}/>
                        <p>Hoang Hai Duong</p>
                    </div>
                    <button className='btn button-logout'><span>Log out</span></button>
                </div>
            }
            <div className='main-chat'>
                {message.map((item, index) => {
                    return (
                        <div key={index} className='each-message'>
                            <img src={item.userImg}></img>
                            <div>
                                <span>{item.userName}</span> <br />
                                <strong>{item.messsage}</strong>
                            </div>
                        </div>
                    );
                })}
            </div>
            {!user && <div className='input-login'>
                <button onClick={() => setUser(true)}><img src={imageGoogle}/>Login by google</button>
                <p>Login to chat realtime</p>
            </div>}
            {user &&
                <form className='contain-input'>
                    <input type='text' className='input-message' placeholder='Hello Ocean' />
                    <button className='button-send'><span>Send</span></button>
                </form>
            }
        </div>
    );
}