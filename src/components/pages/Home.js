import React from "react";
import Card from "../widgets/Card";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to Home Page</h1>
      <p className="mt-4 text-lg text-gray-600">This is the main page of your application.</p>

      <div className="card-grid">
        <Card
          image="https://via.placeholder.com/300x180"
          title="Sample Video 1"
          description="This is a description of the video."
          link="/Tests"
        />
        <Card
          image="https://via.placeholder.com/300x180"
          title="Sample Video 2"
          description="This is a description of the video."
        />
        <Card
          image="https://via.placeholder.com/300x180"
          title="Sample Video 3"
          description="This is a description of the video."
        />
        <Card
          image="https://via.placeholder.com/300x180"
          title="Sample Video 4"
          description="This is a description of the video."
        />
      </div>
    </div>
  );
};

export default Home;
