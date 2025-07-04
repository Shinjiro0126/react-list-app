import React from "react";
import './Snowflakes.css';

export default function Snowflakes(){
  const snowflakes = Array.from({ length: 200}).map((_, index) => {
    return <div
      key={index}
      className="snowflake"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${Math.random() * 5 + 5}s`
      }}
    >
      *
    </div>
  }); 

  return (
    <div className="snowflakes-container">
      { snowflakes }
    </div>
  );
}