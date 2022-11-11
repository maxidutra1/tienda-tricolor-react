import React from "react";
import styled from "styled-components";
import { FooterM } from "./FooterM";
import { FooterLogo } from "./FooterLogo";
import { FooterRedes } from "./FooterRedes";

const StyledFooterContainer = styled.footer`
  background: linear-gradient(180deg, #34269e 0%, rgb(172, 19, 19) 97.92%);
  display: flex;
  margin-top: 25px;
  width: 100%;
  height: 7vh;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  margin-bottom: 0;
  position: fixed;
  bottom: 0;
  z-index: 6;
`;

export const Footercontainer = () => {
  return (
    <StyledFooterContainer>
      <FooterLogo />
      <FooterM />
      <FooterRedes />
    </StyledFooterContainer>
  );
};
