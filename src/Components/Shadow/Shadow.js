import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import * as cartActions from "../../Redux/cart/cart-actions";

export const BackShadow = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: #000000e6;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;

const Shadow = () => {
  const dispatch = useDispatch();
  const cerrarCarrito = () => {
    dispatch(cartActions.toggleCart());
  };

  return <BackShadow onClick={() => cerrarCarrito()}></BackShadow>;
};

export default Shadow;
