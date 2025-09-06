import "./Footer.css";
import "font-awesome/css/font-awesome.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/v4-shims.min.css'; // giúp giữ cú pháp fa v4
import AnimateOnScroll from "../../Utils/AnimateOnScroll";


export default function Footer() {
    const scrollToId = (id) => {
        const view = document.getElementById(id);
        if (view) view.scrollIntoView({ behavior: "smooth", block: 'start' })
    }
    return (
        <footer className="footer containter">

            <div className="footer-container row">
                {/* Contact */}
                <div className="footer-column col-md-3 col-12">
                    <h4>✨ My Motto</h4>
                    <AnimateOnScroll animation={'animate__fadeInLeft'}>
                        <p>“Impossible is just a challenge<br /> waiting to be solved.”</p>
                        <p>🚀 10+ Completed Projects</p>
                        <p>💡 Passionate about technology</p>
                    </AnimateOnScroll>
                </div>

                {/* Social Icons (giữ nguyên code của bạn) */}
                <div className="footer-column col-md-6 col-12">
                    <h4>Follow Me</h4>
                    <AnimateOnScroll animation={'animate__fadeInUp'}>

                        <ul className="footer-social">
                            <li>
                                <a href="https://www.facebook.com/hoang.hai.duong.484951" target="_blank" rel="noreferrer">
                                    <i className="fa fa-brands fa-facebook"></i>
                                </a>
                            </li>

                            {/* Đổi Twitter -> TikTok */}
                            <li>
                                <a href="https://www.tiktok.com/@haiduong09905" target="_blank" rel="noreferrer">
                                    <i className="fa fa-brands fa-tiktok"></i>
                                </a>
                            </li>

                            {/* Google Plus đã “toi”, thay bằng Google hoặc email */}
                            <li className="mb-5 mb-md-0">
                                <a href="mailto:duonghaiduong090905@gmail.com">
                                    <i className="fa fa-solid fa-envelope"></i>
                                </a>
                            </li>

                            <li className="mb-5 mb-md-0">
                                <a href="https://www.instagram.com/haiduong09905/" target="_blank" rel="noreferrer">
                                    <i className="fa fa-brands fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </AnimateOnScroll>
                </div>

                {/* Quick Links */}
                <div className="footer-column col-md-3 col-12">
                    <h4>🧭 Explore</h4>
                    <AnimateOnScroll animation={'animate__fadeInRight'}>
                        <ul>
                            <li><a onClick={() => scrollToId('Home')}>🏠 Home</a></li>
                            <li><a onClick={() => scrollToId('AboutMe')}>👤 About Me</a></li>
                            <li><a onClick={() => scrollToId('Skills')}>🎯 Skills</a></li>
                            <li><a onClick={() => scrollToId('Projects')}>💼 Portfolio</a></li>
                            <li><a onClick={() => scrollToId('Contact')}>📧 Contact</a></li>
                        </ul>
                    </AnimateOnScroll>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <p>© 2025 Ocean. All Rights Reserved.</p>
            </div>

        </footer>
    );
}
