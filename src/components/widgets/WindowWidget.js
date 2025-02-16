import React, { useState, useEffect, useRef } from "react";
import '../../styles/WindowWidget.css'; // Імпорт стилів для віджета

const WindowWidget = () => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false); // Стан для згортання
  const [isClosed, setIsClosed] = useState(false); // Стан для закриття вікна
  const windowRef = useRef(null);

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const closeWindow = () => {
    setIsClosed(true); // Стан для закриття вікна
  };

  useEffect(() => {
    const windowElement = windowRef.current;
    let offsetX, offsetY;

    const onMouseDown = (e) => {
      offsetX = e.clientX - windowElement.getBoundingClientRect().left;
      offsetY = e.clientY - windowElement.getBoundingClientRect().top;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
      windowElement.style.left = `${e.clientX - offsetX}px`;
      windowElement.style.top = `${e.clientY - offsetY}px`;
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    windowElement.querySelector(".window-header").addEventListener("mousedown", onMouseDown);

    return () => {
      windowElement.querySelector(".window-header").removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  if (isClosed) {
    return null; // Якщо вікно закрито, не рендеримо його
  }

  return (
    <div
      ref={windowRef}
      className={`window ${isMaximized ? "maximized" : ""} ${isMinimized ? "minimized" : ""}`}
      style={{ display: isClosed ? "none" : "block" }}
    >
      <div className="window-header">
        <span>Window Title</span>
        <div className="controls">
          <button onClick={toggleMinimize}>🗕</button>
          <button onClick={toggleMaximize}>🗖</button>
          <button onClick={closeWindow}>❌</button>
        </div>
      </div>

      {/* Якщо не згортати, показуємо контент */}
      {!isMinimized && (
        <div className="window-content">
          This is a resizable, draggable window.
        </div>
      )}
    </div>
  );
};

export default WindowWidget;
