import React from "react";
import styled from "styled-components";

const StyledP = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  p {
    margin-bottom: 10px;
    font-size: 1rem;
  }
`;

export const FooterM = () => {
  return (
    <StyledP>
      <p>&copy; 2022 Maximiliano</p>
    </StyledP>
  );
};
