import React from "react";
import styled from "styled-components";

const DivModal = styled.div`
  position: fixed;
  bottom: 7vh;
  border-radius: 10px 10px 0px 0px;
  border: 2px solid #230355;
  background-color: #121212;
  height: 50px;
  width: 350px;
  z-index: 6;
  text-align: center;
  padding-top: 13px;
  @keyframes entrando {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  animation: 1s ease-out 0s 1 entrando;
`;

const ConfirmModal = () => {
  return <DivModal>Tu producto fue agregado con exito!</DivModal>;
};

export default ConfirmModal;
