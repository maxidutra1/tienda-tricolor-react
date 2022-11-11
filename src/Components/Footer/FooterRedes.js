import React from "react";
import styled from "styled-components";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const RedesContainer = styled.div`
  display: flex;
  width: 33%;
  align-items: center;
  justify-content: flex-end;
`;

const StyledRedes = styled.ul`
  margin: 0;
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  padding-right: 30px;
  li {
    padding: 0px 15px;
  }
  a {
    cursor: pointer;
  }
`;

export const FooterRedes = () => {
  return (
    <RedesContainer>
      <StyledRedes>
        <li>
          <a>
            <FaInstagram />
          </a>
        </li>
        <li>
          <a>
            <FaFacebook />
          </a>
        </li>
        <li>
          <a>
            <FaTwitter />
          </a>
        </li>
      </StyledRedes>
    </RedesContainer>
  );
};
