import React from "react";
import styled from "styled-components";
import {
  FormButton,
  FormContainer,
  FormLabel,
} from "../Components/Login/LoginForm";
import { Input } from "../Components/Login/LoginInput";
import { LogoContainer } from "../Components/Login/LoginLogo";
import LogoImg from "../img/logo.jpg";
import { useState } from "react";
import useForm from "../Hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../utils/validator";
import * as userActions from "../Redux/user/user-actions";
import { useNavigate } from "react-router-dom";

const LoginContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #252525;
  width: 400px;
`;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let listaUsuarios = useSelector((state) => state.user.userList);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [loginError, setLoginError] = useState(false);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const changeModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          email: {
            value: "",
            isValid: false,
          },
          password: {
            value: "",
            isValid: false,
          },
        },
        formState.inputs.email?.isValid && formState.inputs.password?.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          displayName: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
    setLoginError(false);
  };

  const loginUser = (e) => {
    e.preventDefault();
    listaUsuarios.forEach((usuario) => {
      if (
        formState.inputs.email.value === usuario.email.value &&
        formState.inputs.password.value === usuario.password.value
      ) {
        dispatch(userActions.setCurrentUser(usuario));
        setLoginError(false);
        navigate(-1);
      } else setLoginError(true);
    });
  };

  const registerUser = (e) => {
    e.preventDefault();
    if (formState.isValid) {
      dispatch(userActions.saveNewUser(formState.inputs));
      dispatch(userActions.setCurrentUser(formState.inputs));
      navigate(-1);
    } else {
      return;
    }
  };

  return (
    <LoginContainer>
      <LogoContainer>
        <img alt="" src={LogoImg} />
      </LogoContainer>
      <form onSubmit={(e) => e.preventDefault()}>
        <FormContainer>
          {!isLoginMode && (
            <Input
              id="displayName"
              label="Nombre"
              type="text"
              onInput={inputHandler}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Campo Obligatorio"
            />
          )}
          <Input
            id="email"
            label="Email"
            type="email"
            onInput={inputHandler}
            validators={[VALIDATOR_EMAIL()]}
            errorText="Campo Obligatorio"
          />
          <Input
            id="password"
            label="Password"
            type="password"
            onInput={inputHandler}
            validators={[VALIDATOR_MINLENGTH(8)]}
            errorText="Campo Obligatorio"
          />

          {isLoginMode ? (
            <FormButton onClick={loginUser}>Ingresar</FormButton>
          ) : (
            <FormButton onClick={registerUser}>Registrarse</FormButton>
          )}
          {loginError && (
            <p style={{ color: "red", fontSize: "0.7rem" }}>
              Las credenciales no son válidas.
            </p>
          )}

          <FormLabel onClick={changeModeHandler}>
            {isLoginMode
              ? "Aún no tenés cuenta? Creala acá!"
              : "Ya tenes cuenta? Ingresa haciendo click acá"}
          </FormLabel>
        </FormContainer>
      </form>
    </LoginContainer>
  );
};

export default Login;
