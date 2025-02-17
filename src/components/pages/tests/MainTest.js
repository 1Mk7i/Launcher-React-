import React, { useState } from "react";

// WindowWidget
import WindowWidget from "../../widgets/WindowWidget";
import TaskbarWidget from "../../widgets/TaskbarWidget";
import { ActiveWindowProvider } from "../../utils/ActiveWindowContext";

const MainTest = () => {
    const [windows, setWindows] = useState([]);

    const addWindow = () => {
        const newWindow = {
            ref: React.createRef(),
            title: `Window ${windows.length + 1}`
        };
        setWindows([...windows, newWindow]);
    };

    return (
        <ActiveWindowProvider>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <p className="mt-4 text-lg text-gray-600">TEST</p>
                <button className="btn" onClick={addWindow}>Add Window</button>
                {windows.map((window, index) => (
                    <WindowWidget key={index} windowRef={window.ref} title={window.title} />
                ))}
                <TaskbarWidget windows={windows} />
            </div>
        </ActiveWindowProvider>
    );
};

export default MainTest;