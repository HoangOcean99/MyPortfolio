import "./Footer.css";
import "font-awesome/css/font-awesome.min.css";

export default function Footer() {
    return (
        <footer className="footer containter">
            <div className="footer-container row">
                {/* Contact */}
                <div className="footer-column col-md-3 col-12">
                    <h4>✨ My Motto</h4>
                    <p>“Impossible is just a challenge<br /> waiting to be solved.”</p>
                    <p>🚀 10+ Completed Projects</p>
                    <p>💡 Passionate about technology</p>
                </div>

                {/* Social Icons (giữ nguyên code của bạn) */}
                <div className="footer-column col-md-6 col-12">
                    <h4>Follow Me</h4>
                    <ul className="footer-social">
                        <li>
                            <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li className="mb-5 mb-md-0">
                            <a href="#">
                                <i className="fa fa-google-plus" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li className="mb-5 mb-md-0">
                            <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="footer-column col-md-3 col-12">
                    <h4>🧭 Explore</h4>
                    <ul>
                        <li><a href="#home">🏠 Home</a></li>
                        <li><a href="#about">👤 About Me</a></li>
                        <li><a href="#portfolio">💼 Portfolio</a></li>
                        <li><a href="#contact">📧 Contact</a></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <p>© 2025 Ocean. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
