import { useRef, useEffect, useState } from "react";
import "animate.css";

function AnimateOnScroll({ children, animation, duration = "1.3s" }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisible(true);
                    observer.unobserve(ref.current);
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(ref.current);
    }, []);

    return (
        <div
            ref={ref}
            className={visible ? `animate__animated ${animation}` : ""}
            style={{
                opacity: visible ? 1 : 0,
                visibility: visible ? "visible" : "hidden",
                animationDuration: duration,
            }}
        >
            {children}
        </div>
    );
}

export default AnimateOnScroll;
