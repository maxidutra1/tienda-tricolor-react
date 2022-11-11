import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 7vh;
`;
export const ProductsContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e5edef;
`;

export const ProductsUl = styled.div`
  padding: 0px;
  list-style: none;
`;

export const ProductsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

export const ProductImg = styled.div`
  width: 60px;
  height: 60px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 50%;
`;

export const ProductInfo = styled.div`
  width: 100%;
  padding: 0 15px;
`;

export const ProductPrice = styled.div`
  text-align: right;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const CostResume = styled.div`
  width: 95%;
  border-top: 1px solid #e5edef;
  padding: 20px 10px;
`;

export const CostLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 50px;
  p {
    margin-top: 5px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
`;

export const CheckoutBtn = styled.button`
  border: none;
  margin: 15px;
  font-weight: 800;
  background-color: #21af7c;
  color: white;
  border-radius: 12px;
  font-size: 1rem;
  text-align: center;
  width: 175px;
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

export const CheckModal = styled.div`
  width: 60%;
  height: 50%;
  border-radius: 20px;
  background-color: #1b5a44;
  position: fixed;
  top: 50%;
  left: 50%;
  box-shadow: 0px 0px 20px 2px #a3a3a3;
  transform: translate(-50%, -50%);
  z-index: 7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ShadowModal = styled.div`
  position: fixed;
  margin: 0;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: #000000e6;
  z-index: 6;
`;
