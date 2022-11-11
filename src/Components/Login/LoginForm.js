import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  align-items: center;
`;

export const FormButton = styled.button`
  border: none;
  font-weight: 800;
  background-color: #060847;
  color: white;
  border-radius: 12px;
  font-size: 1rem;
  text-align: center;
  width: 250px;
  height: 45px;
  margin-top: 10px;
  :hover {
    cursor: pointer;
  }
`;

export const FormLabel = styled.p`
  font-size: 0.75rem;
  padding: 0 25px;
  cursor: pointer;
  margin-bottom: 15px;
`;
