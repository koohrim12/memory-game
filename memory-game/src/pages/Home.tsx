import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/game"); // 클릭 시 /game 경로로 이동
  };

  return (
    <div>
      <h1>기억력 테스트</h1>
      <button onClick={startGame}>시작하기</button>
    </div>
  );
};

export default Home;
