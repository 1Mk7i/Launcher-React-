import React, { useState, useEffect, useRef } from "react";
import { useActiveWindow } from '../utils/ActiveWindowContext';
import '../../styles/WindowWidget.css'; // Імпорт стилів для віджета
import { u } from "framer-motion/client";

const WindowWidget = ({ title, windowRef }) => {
  const [isMaximized, setIsMaximized] = useState(false); // Стан для максимізації
  const [isMinimized, setIsMinimized] = useState(false); // Стан для згортання
  const [isClosed, setIsClosed] = useState(false); // Стан для закриття вікна
  const [isPinned, setIsPinned] = useState(false); // Стан для закріплення вікна
  const { activeWindow, setActiveWindow } = useActiveWindow();

  const isActive = activeWindow === windowRef.current;

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
    windowRef.current.style.display = isMinimized ? "block" : "none";
  };

  const closeWindow = () => {
    setIsClosed(true); // Стан для закриття вікна
  };

  const togglePin = () => {
    setIsPinned(!isPinned);
  };

  useEffect(() => {
    const windowElement = windowRef.current;
    let offsetX, offsetY;

    const onMouseDown = (e) => {
      offsetX = e.clientX - windowElement.getBoundingClientRect().left;
      offsetY = e.clientY - windowElement.getBoundingClientRect().top;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
      setActiveWindow(windowElement); // Встановлюємо вікно активним при натисканні
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
  }, [setActiveWindow]);

  if (isClosed) {
    return null; // Якщо вікно закрито, не рендеримо його
  }

  return (
    <div
      ref={windowRef}
      className={`window ${isMaximized ? "maximized" : ""} ${isMinimized ? "minimized" : ""} ${isActive ? "active" : ""} ${isPinned ? "pinned" : ""}`}
      style={{ display: isClosed ? "none" : "block", zIndex: isPinned ? 2000 : (isActive ? 1000 : 1) }}
    >
      <div className="window-header">
        <span>{title}</span>
        <div className="controls">
          <button onClick={togglePin}>{isPinned ? "📌" : "📍"}</button>
          <button onClick={toggleMinimize}>🗕</button>
          <button onClick={toggleMaximize}>🗖</button>
          <button onClick={closeWindow}>❌</button>
        </div>
      </div>

      {/* Якщо не згортати, показуємо контент */}
      <div className="window-content">
        This is a resizable, draggable window.
      </div>
    </div>
  );
};

export default WindowWidget;