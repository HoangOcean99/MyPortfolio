import React, { useState } from "react";
import "./Chest.css";

export default function Chest({ setFilter }) {
  const [openDrawer, setOpenDrawer] = useState(-1);

  const toggleDrawer = (index) => {
    const mainIndex = index === openDrawer ? -1 : index
    setOpenDrawer(mainIndex);
    setFilter(mainIndex)
  };

  return (
    <div className="chest-black">
      {/* Panels */}
      <div className="chest__panel chest__panel--back"></div>
      <div className="chest__panel chest__panel--top"></div>
      <div className="chest__panel chest__panel--bottom"></div>
      <div className="chest__panel chest__panel--right"></div>
      <div className="chest__panel chest__panel--front">
        <div className="chest__panel chest__panel--front-frame"></div>
      </div>
      <div className="chest__panel chest__panel--left"></div>

      {/* Drawer 1 */}
      <div
        className="chest__drawer drawer"
        data-position="1"
        data-open={openDrawer === 1}
        onClick={() => toggleDrawer(1)}
      >
        <div className="drawer__structure">
          <div className="drawer__panel drawer__panel--back"></div>
          <div className="drawer__panel drawer__panel--bottom">
            <div className="main-project-bottom">
              <div className="project-bottom">
                <img
                  src="https://picsum.photos/id/1011/400/250"
                  alt="Demo Project"
                  className="project-img"
                />
              </div>
              <div className="project-bottom">
                <img
                  src="https://picsum.photos/id/1012/400/250"
                  alt="Demo Project"
                  className="project-img"
                />
              </div>
              <div className="project-bottom">
                <img
                  src="https://picsum.photos/id/1013/400/250"
                  alt="Demo Project"
                  className="project-img"
                />
              </div>
              <div className="project-bottom">
                <img
                  src="https://picsum.photos/id/1014/400/250"
                  alt="Demo Project"
                  className="project-img"
                />
              </div>
              <div className="project-bottom">
                <img
                  src="https://picsum.photos/id/1015/400/250"
                  alt="Demo Project"
                  className="project-img"
                />
              </div>
              <div className="project-bottom">
                <img
                  src="https://picsum.photos/id/1016/400/250"
                  alt="Demo Project"
                  className="project-img"
                />
              </div>
            </div>
          </div>
          <div className="drawer__panel drawer__panel--right"></div>
          <div className="drawer__panel drawer__panel--left"></div>
          <div className="drawer__panel drawer__panel--front">
            <span>Web app</span>
          </div>
        </div>
      </div>

      {/* Drawer 2 */}
      <div
        className="chest__drawer drawer"
        data-position="2"
        data-open={openDrawer === 2}
        onClick={() => toggleDrawer(2)}
      >
        <div className="drawer__structure">
          <div className="drawer__panel drawer__panel--back"></div>
          <div className="drawer__panel drawer__panel--bottom">
            <div className="main-project-bottom">
              <div className="project-bottom">
                <img
                  src="https://picsum.photos/id/1021/400/250"
                  alt="Demo Project"
                  className="project-img"
                />
              </div>
              <div className="project-bottom">
                <img
                  src="https://picsum.photos/id/1018/400/250"
                  alt="Demo Project"
                  className="project-img"
                />
              </div>
              <div className="project-bottom">
                <img
                  src="https://picsum.photos/id/1019/400/250"
                  alt="Demo Project"
                  className="project-img"
                />
              </div>
              <div className="project-bottom">
                <img
                  src="https://picsum.photos/id/1020/400/250"
                  alt="Demo Project"
                  className="project-img"
                />
              </div>
              <div className="project-bottom">
                <img
                  src="https://picsum.photos/id/1021/400/250"
                  alt="Demo Project"
                  className="project-img"
                />
              </div>
              <div className="project-bottom">
                <img
                  src="https://picsum.photos/id/1022/400/250"
                  alt="Demo Project"
                  className="project-img"
                />
              </div>
            </div>
          </div>
          <div className="drawer__panel drawer__panel--right"></div>
          <div className="drawer__panel drawer__panel--left"></div>
          <div className="drawer__panel drawer__panel--front">
            <span>Cross-platform app</span>
          </div>
        </div>
      </div>

      {/* Drawer 3 */}
      <div
        className="chest__drawer drawer"
        data-position="3"
        data-open={openDrawer === 3}
        onClick={() => toggleDrawer(3)}
      >
        <div className="drawer__structure">
          <div className="drawer__panel drawer__panel--back"></div>
          <div className="drawer__panel drawer__panel--bottom">
            <div className="main-project-bottom">
              <div className="project-bottom">
                <img
                  src="https://picsum.photos/id/1023/400/250"
                  alt="Demo Project"
                  className="project-img"
                />
              </div>
              <div className="project-bottom">
                <img
                  src="https://picsum.photos/id/1024/400/250"
                  alt="Demo Project"
                  className="project-img"
                />
              </div>
              <div className="project-bottom">
                <img
                  src="https://picsum.photos/id/1025/400/250"
                  alt="Demo Project"
                  className="project-img"
                />
              </div>
              <div className="project-bottom">
                <img
                  src="https://picsum.photos/id/1026/400/250"
                  alt="Demo Project"
                  className="project-img"
                />
              </div>
              <div className="project-bottom">
                <img
                  src="https://picsum.photos/id/1027/400/250"
                  alt="Demo Project"
                  className="project-img"
                />
              </div>
              <div className="project-bottom">
                <img
                  src="https://picsum.photos/id/1028/400/250"
                  alt="Demo Project"
                  className="project-img"
                />
              </div>
            </div>
          </div>
          <div className="drawer__panel drawer__panel--right"></div>
          <div className="drawer__panel drawer__panel--left"></div>
          <div className="drawer__panel drawer__panel--front">
            <span>
              Game
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
