import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import "../../Decoration/FirstPage/StudentCardLanyard.css";

gsap.registerPlugin(Draggable);

export default function LanyardCard() {
  const cardRef = useRef(null);
  const ropeRef1 = useRef(null);
  const ropeRef2 = useRef(null);
  const containerRef = useRef(null);

  let leftTemp = -200;
  let positionCardTemp = 0.385;
  let lineLeft = 0.45;

  useEffect(() => {
    const card = cardRef.current;
    const container = containerRef.current;
    const rope1 = ropeRef1.current;
    const rope2 = ropeRef2.current;

    function updateRope() {
      if (!card || !container || !rope1 || !rope2) return;

      const containerRect = container.getBoundingClientRect();

      // update mặc định theo màn hình
      if (window.innerWidth < 480) {
        leftTemp = 0;
        positionCardTemp = 0.4;
        lineLeft = 0.2;
      } else if (window.innerWidth < 768) {
        leftTemp = 0;
        positionCardTemp = 0.4;
        lineLeft = 0.2;
      } else if (window.innerWidth < 1024) {
        leftTemp = 0;
        positionCardTemp = 0.42;
        lineLeft = 0.2;
      } else if (window.innerWidth < 1366) {
        leftTemp = 0;
        positionCardTemp = 0.4;
        lineLeft = 0.35;
      } else if (window.innerWidth < 1920) {
        leftTemp = 0;
        positionCardTemp = 0.35;
        lineLeft = 0.4;
      } else {
        leftTemp = -215;
        positionCardTemp = 0.38;
        lineLeft = 0.45;
      }

      // điểm gắn dây
      const startX1 = containerRect.width * 0.66;
      const startY1 = -100;
      const startX2 = containerRect.width * lineLeft;
      const startY2 = -100;

      const cardRect = card.getBoundingClientRect();
      const cardX = cardRect.left - containerRect.left + cardRect.width * positionCardTemp;
      const cardY = cardRect.top - containerRect.top;

      // dây 1
      const dx1 = cardX - startX1;
      const dy1 = cardY - startY1;
      const angle1 = Math.atan2(dy1, dx1) * (180 / Math.PI);
      const length1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);

      rope1.style.height = `${length1 + 100}px`;
      rope1.style.left = `${startX1}px`;
      rope1.style.top = `${startY1}px`;
      rope1.style.transform = `rotate(${angle1 - 90}deg)`;
      rope1.style.transformOrigin = "top center";

      // dây 2
      const dx2 = cardX - startX2;
      const dy2 = cardY - startY2;
      const angle2 = Math.atan2(dy2, dx2) * (180 / Math.PI);
      const length2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

      rope2.style.height = `${length2 + 100}px`;
      rope2.style.left = `${startX2}px`;
      rope2.style.top = `${startY2}px`;
      rope2.style.transform = `rotate(${angle2 - 90}deg)`;
      rope2.style.transformOrigin = "top center";
    }

    Draggable.create(card, {
      type: "x,y",
      bounds: window,
      inertia: true,
      onDrag: updateRope,
      onRelease: () => {
        gsap.to(card, {
          x: leftTemp,
          y: 0,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
          onUpdate: updateRope,
        });
      },
    });

    // gọi ban đầu
    updateRope();

    // resize container
    const resizeObserver = new ResizeObserver(updateRope);
    resizeObserver.observe(container);

    // resize window
    window.addEventListener("resize", updateRope);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateRope);
    };
  }, []);


  return (
    <div
      ref={containerRef}
      className="position-relative rounded mx-auto contain-content-card"
    >
      {/* Dây */}
      <div ref={ropeRef1} className="position-absolute line line-1" />
      <div ref={ropeRef2} className="position-absolute line line-2" />

      {/* Thẻ */}
      <div className="main-card card shadow-lg border-primary position-absolute d-flex flex-column align-items-center justify-content-center text-center"
        ref={cardRef}>
        <div className="contain-detail-card d-flex justify-content-center align-items-start vh-100 vw-100">
          <div className="shadow-lg border-primary position-relative d-flex flex-column align-items-center text-center">
            <div className="dot-metal rounded-circle position-absolute"></div>

            <div className="lanyard-header d-flex justify-content-end align-items-center p-2">
            </div>

            <div className="lanyard-banner b1"></div>
            <div className="lanyard-banner b2"></div>

            <div className="lanyard-photo d-flex justify-content-center ">
              <img
                src="https://oxkwejpbgtqnqjqrvecp.supabase.co/storage/v1/object/public/savememories/ImageEachPerson/z6869388227096_a935efec2247ea26e0aa2fdd87448b4b.jpg"
                alt="Profile"
                className="rounded-circle" />
            </div>

            <div className="lanyard-info text-center p-3">
              <h3>Hoang Hai Duong</h3>
              <p className="title">Fullstack developer</p>
            </div>

            <div className="lanyard-footer bg-success text-white text-center py-2 position-absolute w-100 bottom-0">
              <p className="mb-0">www.website.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
