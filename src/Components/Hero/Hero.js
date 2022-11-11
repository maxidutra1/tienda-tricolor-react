import React from "react";
import styled from "styled-components";
import NosotrosImg from "../../img/pc_hero.png";
import { Link } from "react-router-dom";

const StyledHero = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
  height: 400px;
  margin-bottom: 50px;
`;

const HeroL = styled.div`
  padding-top: 20px;
  width: 60%;
  margin-left: 50px;
  h3 {
    margin: 0;
    font-weight: 600;
    font-size: 2.5rem;
  }
  h2 {
    font-size: 4rem;
    font-weight: 800;
    margin: 0;
  }
  p {
    font-size: 1.25rem;
  }
`;

const HeroBtn = styled.button`
  font-weight: 600;
  border-radius: 10px;
  margin-left: 15px;
  padding: 6px 10px;
  height: 40px;
  width: 150px;
  &:hover {
    cursor: pointer;
    box-shadow: rgb(38 38 38) 0px 0px 16px 5px;
  }
`;

const HeroR = styled.div`
  width: 50%;
  img {
    position: absolute;
    right: 0;
    height: 400px;
  }
`;

const Hero = () => {
  return (
    <StyledHero id="nosotros">
      <HeroL>
        <h3>Somos</h3>
        <h2>Tienda Tricolor</h2>
        <p>Una tienda para tricolores</p>
        
        <a href="/#productos">
          <HeroBtn
            style={{
              backgroundColor: "#b8abf4",
              color: "rgb(11, 24, 120)",
              border: "2px solid #731414",
            }}
          >
            VER PRODUCTOS </HeroBtn>
        </a>
        
      </HeroL>
      <HeroR>
        <img src={NosotrosImg} alt="" />
      </HeroR>
    </StyledHero>
  );
};

export default Hero;
