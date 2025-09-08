import { useEffect, useRef, useState } from 'react';
import './ChatRealtime.css'
import { auth, provider, db } from '../../Utils/firebase.js';
import { signInWithPopup, signOut } from 'firebase/auth';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function ChatRealTime() {
    const [user, setUser] = useState(false);
    const [messages, setMessages] = useState([]);
    const inputText = useRef(null);

    useEffect(() => {
        const q = query(collection(db, "messages"), orderBy("createdAt"));
        const unsub = onSnapshot(q, (snapshot) => {
            const msgs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setMessages(msgs);
        });
        return () => unsub();
    }, []);

    const sendMessage = async (text) => {
        if (!text) return;
        await addDoc(collection(db, "messages"), {
            text,
            userName: user.displayName,
            userImg: user.photoURL,
            createdAt: serverTimestamp()
        });
    };

    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
        } catch (err) {
            toast.error('Login failed')
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
        setUser(false);
    };

    return (
        <div className='contain-chatRealtime mt-3'>
            <div className='title'>
                <h2>Room chat</h2>
            </div>
            {user &&
                <div className='contain-infor'>
                    <div className='infor-detail'>
                        <img src={user.photoURL} />
                        <p>{user.displayName}</p>
                    </div>
                    <button className='btn button-logout' onClick={() => handleLogout()}><span>Log out</span></button>
                </div>
            }
            <div className='main-chat'>
                {messages.map((item) => {
                    const isSelf = item.userName === user?.displayName; // tin nhắn của mình
                    return (
                        <div
                            key={item.id}
                            className={`each-message ${isSelf ? 'self' : ''}`}
                        >
                            {!isSelf && <img src={item.userImg} alt={item.userName} />}
                            <div>
                                <span>{item.userName}</span> <br />
                                <strong>{item.text}</strong>
                            </div>
                            {isSelf && <img src={item.userImg} alt={item.userName} />}
                        </div>
                    );
                })}
            </div>

            {!user && <div className='input-login'>
                <button onClick={() => handleLogin()}><img src={'/images/google.png'} />Login by google</button>
                <p>Login to chat realtime</p>
            </div>}
            {user &&
                <form className='contain-input' onSubmit={(e) => {
                    e.preventDefault(); // ngăn reload page
                    sendMessage(inputText.current.value);
                    inputText.current.value = ""; // reset input
                }}>
                    <input type='text' className='input-message' placeholder='Hello Ocean' ref={inputText} />
                    <button type='submit' className='button-send'><span>Send</span></button>
                </form>
            }

        </div>
    );
}