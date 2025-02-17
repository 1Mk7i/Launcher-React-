import React from "react";
import { useActiveWindow } from '../utils/ActiveWindowContext';
import '../../styles/TaskbarWidget.css'; // Імпорт стилів для віджета

const TaskbarWidget = ({ windows }) => {
  const { setActiveWindow } = useActiveWindow();

  const handleWindowClick = (windowRef) => {
    if (windowRef.current) {
      windowRef.current.style.display = "block";
      setActiveWindow(windowRef.current);
      windowRef.current.style.left = '45%';
      windowRef.current.style.top = '45%';
    }
    
  };

  return (
    <div className="taskbar">
      {windows.map((window, index) => (
        <div
          key={index}
          className="taskbar-icon"
          onClick={() => handleWindowClick(window.ref)}
          title={window.title}
        >
          🗔
        </div>
      ))}
    </div>
  );
};

export default TaskbarWidget;