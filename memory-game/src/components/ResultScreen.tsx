import React from "react";

interface ResultScreenProps {
  isSuccess: boolean;
  onRetry: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ isSuccess, onRetry }) => {
  return (
    <div>
      {isSuccess ? (
        <h2>기억력이 좋은 걸 ~ 대단해 성공!</h2>
      ) : (
        <div>
          <h2>땡, 다시 도전해!</h2>
          <button onClick={onRetry}>다시 시작하기</button>
        </div>
      )}
    </div>
  );
};

export default ResultScreen;
