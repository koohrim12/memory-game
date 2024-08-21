import React from "react";

interface StartButtonProps {
  onClick: () => void;
}

const StartButton: React.FC<StartButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>시작하기</button>;
};

export default StartButton;
