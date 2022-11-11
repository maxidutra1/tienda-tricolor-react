import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Card } from "../Card/Card";

const StyledProd = styled.div`
  margin-top: 30px;
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  max-width: 95%;
  justify-content: center;
`;

export const ProductsContainer = () => {
  let Productos = useSelector((state) => state.products.productos);

  return (
    <StyledProd>
      {Object.entries(Productos).map(([productos]) => {
        return Productos[productos].map((producto) => {
          return <Card key={producto.id} producto={producto} />;
        });
      })}
    </StyledProd>
  );
};
