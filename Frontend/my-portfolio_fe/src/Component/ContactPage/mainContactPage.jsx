import ChatRealTime from "./ChatRealtime";
import SendContact from "./SendContact";
import './MainContactPage.css';
import { ToastContainer } from "react-toastify";
import AnimateOnScroll from "../../Utils/AnimateOnScroll";

export default function MainContactPage() {
    return (
        <div className="container contain-realtime" id="Contact">
            <AnimateOnScroll animation={'animate__backInDown'}>
                <div className="contain-tilte-contact"><h2 className="title-mainContact">Contact and Chat</h2></div>
            </AnimateOnScroll>
            <div className="row contain-mainContactPage">
                <div className="col-sm-12 col-md-6">
                    <AnimateOnScroll animation={'animate__fadeInLeftBig'}>
                        <ChatRealTime />
                    </AnimateOnScroll>
                </div>
                <div className="col-sm-12 col-md-6">
                    <AnimateOnScroll animation={'animate__fadeInRightBig'}>
                        <SendContact />
                    </AnimateOnScroll>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                style={{ zIndex: '999' }}
            />
        </div>
    );
}   