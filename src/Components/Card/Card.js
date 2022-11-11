import React from "react";
import styled from "styled-components";
import { formatPrice } from "../../utils/formatPrice";
import { useDispatch } from "react-redux";
import * as cartActions from "../../Redux/cart/cart-actions";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  border-radius: 20px;
  border: 2px solid #6e7198;
  margin: 10px;
  position: relative;
  width: 400px;
  height: 550px;
  justify-content: space-between;
`;

const CardSup = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const CardInf = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  padding-top: 10px;
`;

const StyledTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  padding: 0px 10px;
  padding-top: 15px;
`;
const StyledImg = styled.div`
 
  img {
    padding: 10px;
    border-radius: 30px;
    width: 70%;
    aspect-ratio: 3/4;
    width: 80%;
    height: 80%;
    object-fit: cover;
  }
  h5 {
    font-size: 1.2rem;
    margin: 30px 0px;
  }
`;
const StyledPrice = styled.p`
  padding-left: 40px;
  font-size: 1.1rem;
  font-weight: 700;
`;

const StyledAdd = styled.button`
  border: none;
  font-weight: 800;
  background-color: #353abc;
  color: white;
  border-radius: 12px;
  font-size: 1rem;
  text-align: center;
  width: 110px;
  height: 45px;
  margin-right: 20px;
  :hover {
    cursor: pointer;
    width:105px;
    background-color: #3d328b; 
  }
  :active {
    background-color:#2c195d ;
    box-shadow: 0px 0px 5px 1px white;
  }
`;

export const Card = ({ producto }) => {
  const dispatch = useDispatch();

  const agregarItem = () => {
    dispatch(cartActions.addItem(producto));
    dispatch(cartActions.holaModal());
    setTimeout(() => {
      dispatch(cartActions.chauModal());
    }, 2000);
  };

  return (
    <StyledCard>
      <CardSup>
        <StyledImg>
          <img src={producto.foto} alt="Imagen del producto" />
        </StyledImg>
        <StyledTitle>{producto.nombre}</StyledTitle>
      </CardSup>
      <CardInf>
        <StyledPrice>{formatPrice(producto.precio)}</StyledPrice>
        <StyledAdd onClick={agregarItem}>AGREGAR</StyledAdd>
      </CardInf>
    </StyledCard>
  );
};
