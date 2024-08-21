import React, { useState } from "react";

const Game: React.FC = () => {
  const [showInput, setShowInput] = useState(false);

  const handleTimeUp = () => {
    setShowInput(true);
  };

  return (
    <div>
      {showInput ? (
        <div>
          {/* 타이머와 이미지가 사라지고 입력 필드가 표시되는 로직 */}
          <p>타이머가 끝났습니다!</p>
          <input type="text" placeholder="정답을 입력하세요" />
          <button>확인하러 가기</button>
        </div>
      ) : (
        <div>
          <p>타이머와 이미지가 나타납니다</p>
          {/* 타이머 및 이미지 컴포넌트 추가 */}
        </div>
      )}
    </div>
  );
};

export default Game;
