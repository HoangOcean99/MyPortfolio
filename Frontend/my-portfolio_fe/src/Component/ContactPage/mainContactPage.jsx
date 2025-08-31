import ChatRealTime from "./chatRealtime";
import SendContact from "./SendContact";
import './MainContactPage.css';

export default function MainContactPage() {
    return (
        <div className="container contain-realtime">
            <h2 className="title-mainContact">Contact and Chat</h2>
            <div className="row contain-mainContactPage">
                <div className="col-sm-12 col-md-6">
                    <ChatRealTime />
                </div>
                <div className="col-sm-12 col-md-6">
                    <SendContact />
                </div>
            </div>
        </div>
    );
}