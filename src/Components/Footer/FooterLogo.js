import React from "react";
import styled from "styled-components";
import logoFooter from "../../img/logo.jpg";

const StyledLogoContainer = styled.div`
  display: flex;
  width: 35%;
  align-items: center;
  justify-content: flex-start;
  img {
    padding-left: 25px;
    height: 7vh;
  }
`;

export const FooterLogo = () => {
  return (
    <StyledLogoContainer>
      <img src={logoFooter} alt="Logo Tienda tricolor" />
    </StyledLogoContainer>
  );
};
