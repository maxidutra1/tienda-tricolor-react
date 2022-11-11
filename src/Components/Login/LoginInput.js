import React, { useReducer, useEffect } from "react";
import styled, { css } from "styled-components";
import { validate } from "../../utils/validator";

const CHANGE = "CHANGE";
const TOUCH = "TOUCH";

const FormControl = styled.div`
  margin: 1rem 0;
`;

const FormInput = styled.input`
  width: 100%;
  font-size: 1.25rem;
  border: 2px solid #6e7198;
  border-radius: 12px;
  color: white;
  background-color: #121212;
  padding: 5px 10px;
  ${({ showError }) =>
    showError
      ? css`
          border-color: red;
          background: #ffd1d1;
        `
      : null}
`;

const StyledLabel = styled.div`
  font-weight: bold;
  padding: 4px 0;
  margin-bottom: 0.5rem;
  margin-left: 15px;
  ${({ showError }) => (showError ? `color: red;` : null)}
`;

const inputReducer = (state, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case TOUCH:
      return {
        ...state,
        isTouch: true,
      };

    default:
      return state;
  }
};

const ErrorText = styled.p`
  color: red;
  padding: 4px 0;
  margin: 0 16px;
`;

export const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouch: false,
    isValid: props.initialValid || false,
  });

  const { isValid, value } = inputState;
  const { onInput, id } = props;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [onInput, id, value, isValid]);

  const changeHandler = (event) => {
    dispatch({
      type: CHANGE,
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = (event) => {
    dispatch({
      type: TOUCH,
    });
  };

  return (
    <FormControl>
      <StyledLabel
        htmlFor={props.id}
        showError={!inputState.isValid && inputState.isTouch}
      >
        {props.label}
      </StyledLabel>

      <FormInput
        showError={!inputState.isValid && inputState.isTouch}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />

      {!inputState.isValid && inputState.isTouch && (
        <ErrorText>{props.errorText}</ErrorText>
      )}
    </FormControl>
  );
};
