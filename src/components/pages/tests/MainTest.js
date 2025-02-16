import React from "react";

// WindowWidget
import WindowWidget from "../../widgets/WindowWidget";

const MainTest = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <p className="mt-4 text-lg text-gray-600">TEST</p>
            <WindowWidget />
        </div>
    );
};

export default MainTest;
