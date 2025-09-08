import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./IntroMyself.css";
import { ReactTyped } from "react-typed";
import { getGeneral } from "../../Api/GeneralApi";
import AnimateOnScroll from "../../Utils/AnimateOnScroll";

export default function AboutMe() {
  const [generalInfor, setGeneralInfor] = useState(null);
  useEffect(() => {
    const fetchGeneral = async () => {
      const response = await getGeneral();
      setGeneralInfor(response.data[0]);
    }
    fetchGeneral();
  }, []);
  return (
    <section className="about-me py-5" id="AboutMe">
      <div className="container">
        <div className="row align-items-center">
          {/* Ảnh bên trái */}
          <div className="col-md-5 col-sm-12 text-center mb-4 mb-md-0">
            <AnimateOnScroll animation={'animate__fadeInLeftBig'}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={'/images/AnhMyself.jpg'}
                      alt="Nguyễn Dương Hải"
                      className="img-fluid rounded shadow"
                      style={{ maxHeight: "550px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="flip-card-back d-flex flex-column align-items-center justify-content-center rounded shadow text-center p-3">
                    {/* Title */}
                    <h5 className="mb-3 fw-bold">My Journey in Tech<br /> 👇</h5>

                    {/* Mini Timeline */}
                    <ul className="list-unstyled mb-5">
                      {/* <li>🎓 2023 - Bắt đầu học CNTT</li>
                    <li>💻 2024 - Dự án đầu tiên</li>
                    <li>🚀 2025 - Hướng đến Fullstack Developer</li> */}
                      <li>🎓 2023 - First step into IT</li>
                      <li>💻 2024 - First real-world project</li>
                      <li>🚀 2025 - On the way to Fullstack Developer</li>
                    </ul>



                    {/* Personal Interests */}
                    <div className="mb-5">
                      <h6 className="fw-bold">Interests</h6>
                      <p>⚽ Football | 🎶 Music | 🎮 Gaming | 💻 Code</p>
                    </div>
                    {/* Fun Fact */}
                    <small className="text-muted">
                      Did you know? I’ve finished 10+ projects and still coding at 2AM 😅
                    </small>
                  </div>

                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Văn bản bên phải */}
          {generalInfor && <div className="col-md-7 col-sm-12 contain-intro ">
            <AnimateOnScroll animation={'animate__fadeInRightBig'}>
              <h2 className="mb-3 title-aboutme">
                About Me
              </h2>
              <p className="fs-5 intro-p">
                {/* Xin chào, mình là Hoàng Hải Dương, một Fullstack Developer với niềm đam mê biến ý tưởng thành những sản phẩm số hữu ích.
              Mình có kinh nghiệm làm việc ở cả Frontend và Backend.
              Điểm mạnh của mình là khả năng học nhanh, quản lí thời gian và thích nghi với công nghệ mới, cùng với tư duy giải quyết vấn đề sáng tạo. Mình tin rằng một sản phẩm tốt không chỉ dừng lại ở việc hoạt động trơn tru, mà còn cần mang đến trải nghiệm người dùng tích cực.
              Ngoài lập trình, mình quan tâm đến AI, UI/UX design, hạ tầng công nghệ và phát triển ứng dụng thực tế. Mục tiêu của mình trong tương lai là trở thành một developer toàn diện, có thể tham gia từ ý tưởng, thiết kế đến triển khai và vận hành hệ thống, đảm bảo mọi yêu cầu của khách hàng và doanh nghiệp. */}
                <ReactTyped
                  strings={[
                    "Hello, my name is Hoang Duong Duong - fullstack Developer passionate about turning ideas into meaningful digital products. I have experience working in both Frontend and Backend development. My strengths are fast learning, time management, adaptability to new technologies, and a creative problem-solving mindset. I believe that a great product is not only about smooth functionality but also about delivering a positive user experience. Beyond coding, I’m deeply interested in AI, UI/UX design, technology infrastructure, and building real-world applications. My goal is to become a well-rounded developer who can contribute throughout the entire process—from ideation and design to deployment and system operation—ensuring every project meets both customer and business needs."
                  ]}
                  typeSpeed={17}
                />
              </p>
              <div className="deco-intro">
                <div className="deco-1">
                  <h1><span className="intro-color">{generalInfor.projectFinished}</span>+</h1>
                  <h4>Project Finished</h4>
                </div>
                <div className="deco-2">
                  <h1><span className="intro-color">{generalInfor.yearCoding}</span>+</h1>
                  <h4>Years of Coding</h4>
                </div>
                <div className="deco-3">
                  <h1><span className="intro-color">{generalInfor.GPA}</span>/4.0</h1>
                  <h4>GPA</h4>
                </div>
              </div>
              <h5 className="h5-conclu text-secondary">Heart in work, mind in creation.</h5>
            </AnimateOnScroll>
          </div>}
        </div>
      </div>
    </section >
  );
}
