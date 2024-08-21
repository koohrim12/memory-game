import React, { useState } from "react";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<"home" | "game" | "result">(
    "home"
  );
  const [showInput, setShowInput] = useState(false);

  const startGame = () => {
    setCurrentPage("game");
  };

  const handleTimeUp = () => {
    setShowInput(true);
  };

  const handleResult = (isCorrect: boolean) => {
    setCurrentPage(isCorrect ? "result" : "home");
  };

  const handleRestart = () => {
    setCurrentPage("home");
    setShowInput(false);
  };

  const Home = () => (
    <div>
      <h1>기억력 테스트</h1>
      <button onClick={startGame}>시작하기</button>
    </div>
  );

  const Game = () => (
    <div>
      {showInput ? (
        <div>
          <p>타이머가 끝났습니다!</p>
          <input type="text" placeholder="정답을 입력하세요" />
          <button onClick={() => handleResult(true)}>확인하러 가기</button>
        </div>
      ) : (
        <div>
          <p>타이머와 이미지가 나타납니다</p>
          {/* 타이머 및 이미지 컴포넌트 추가 */}
          <button onClick={handleTimeUp}>타이머 끝내기</button>
        </div>
      )}
    </div>
  );

  const Result = () => (
    <div>
      <p>Result Page</p>
      <button onClick={handleRestart}>다시 시작하기</button>
    </div>
  );

  return (
    <div>
      {currentPage === "home" && <Home />}
      {currentPage === "game" && <Game />}
      {currentPage === "result" && <Result />}
    </div>
  );
};

export default App;
