import React from "react";
import styled from "styled-components"; // styled-components 사용

interface ImageDisplayProps {
  imageUrl: string;
}

const StyledImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border: 2px solid #ccc;
  border-radius: 8px;
`;

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl }) => {
  return <StyledImage src={imageUrl} alt="Memory Test" />;
};

export default ImageDisplay;
