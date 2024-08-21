import React from "react";

const Result: React.FC = () => {
  return (
    <div>
      <p>Result Page</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

const handleClick = () => {
  console.log("Button clicked");
};

export default Result; // 기본 내보내기
