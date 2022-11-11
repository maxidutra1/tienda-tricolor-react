import React from "react";
import styled from "styled-components";

const StyledContent = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

export default Content;
