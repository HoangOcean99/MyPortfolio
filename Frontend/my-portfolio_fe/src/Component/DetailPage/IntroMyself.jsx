import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./IntroMyself.css"
import imageMySelf from "../../assets/AnhMyself.jpg"

export default function AboutMe() {
  return (
    <section className="about-me py-5 bg-light" id="about">
      <div className="container">
        <div className="row align-items-center">
          {/* Ảnh bên trái */}
          <div className="col-md-5 col-sm-12 text-center mb-4 mb-md-0">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={imageMySelf}
                    alt="Nguyễn Dương Hải"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "550px", objectFit: "cover" }}
                  />
                </div>
                <div className="flip-card-back d-flex align-items-center justify-content-center rounded shadow">
                  <h3>Xin chào, tôi là Hải 👋</h3>
                </div>
              </div>
            </div>
          </div>


          {/* Văn bản bên phải */}
          <div className="col-md-7 col-sm-12">
            <h2 className="mb-3">About Me</h2>
            <p className="fs-5 text-secondary">
              Nguyễn Dương Hải – Frontend Developer. Tôi đam mê xây dựng các giao diện
              tương tác, nơi người dùng có thể trải nghiệm một cách trực quan và mượt mà.
              Tôi luôn hướng tới những giải pháp sáng tạo, tối ưu và thực tế, kết hợp
              giữa thiết kế tinh tế và hiệu năng cao. Mỗi dự án đối với tôi là một cơ hội
              để học hỏi, thử thách bản thân và mang lại giá trị thực sự cho người dùng.
            </p>
          </div>
        </div>
      </div>
    </section >
  );
}
