import React, { useState } from "react";

interface InputFieldProps {
  onSubmit: (inputValue: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <label htmlFor="memory-input">기억한 내용을 입력하세요:</label>
      <input
        id="memory-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="내용을 입력하세요"
      />
      <button onClick={handleSubmit}>확인하러 가기</button>
    </div>
  );
};

export default InputField;
