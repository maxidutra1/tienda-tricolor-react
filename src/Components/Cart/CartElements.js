import styled from "styled-components";

export const CartContent = styled.div`
  overflow: auto;
  min-height: 100px;
  height: 100%;
  padding: 20px;
  height: 100%;
`;

export const CartContainer = styled.div`
  padding: 10px;
  border-bottom: 1px solid #6e7198;
`;
export const CartItem = styled.div`
  padding: 10px 5px;
  display: grid;
  grid-template-columns: 20% 40% 40%;
  justify-content: space-between;
`;

export const ProductImg = styled.div`
  width: 46px;
  height: 46px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const CartFooter = styled.div`
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled.div`
  border: none;
  margin: 15px;
  font-weight: 800;
  background-color: #21af7c;
  color: white;
  border-radius: 12px;
  font-size: 1rem;
  text-align: center;
  width: 200px;
  height: 30px;
  line-height: 30px;
}
&:hover {
  cursor: pointer;
}
&:active {
  background-color: #1e996c;
  box-shadow: 0px 0px 5px 1px white;
}
`;
