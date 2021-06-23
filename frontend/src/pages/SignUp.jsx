import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import user from "../reducers/user";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const accessToken = useSelector((store) => store.user.accessToken);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  const onFormSubmit = (e) => {
    e.preventDefault();

    const API_REGISTER = "http://192.168.10.146:8080/signup";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
      }),
    };

    fetch(API_REGISTER, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          batch(() => {
            dispatch(user.actions.setAccessToken(data.accessToken));
            dispatch(user.actions.setErrors(null));
          });
        } else {
          dispatch(user.actions.setErrors(data));
        }
      });

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Wrapper onSubmit={onFormSubmit}>
      <Header>CREATE ACCOUNT</Header>
      <Instructions>Fill in the information below:</Instructions>
      <FirstName
        type='text'
        aria-label='First name'
        placeholder='First name'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      ></FirstName>
      <LastName
        type='text'
        aria-label='Last name'
        placeholder='Last name'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      ></LastName>
      <Email
        type='email'
        aria-label='Email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></Email>
      <Password
        type='password'
        aria-label='Password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></Password>
      <Button type='submit'>Create account</Button>
      <CreateAccount>
        Already a member? <Login to='/login'>Login</Login>
      </CreateAccount>
    </Wrapper>
  );
};

export default SignUp;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 56vh;
  padding: 0.857em;

  @media (min-width: 998px) {
    height: 74vh;
  }
`;

const Header = styled.h2`
  margin-top: 1.429em;
  margin-bottom: 1.429em;
`;

const Instructions = styled.p`
  margin-bottom: 16px;
`;

const FirstName = styled.input`
  width: 24em;
  margin-bottom: 14px;
  padding: 8px;
  border: 1px solid #dad9d9;
  border-radius: 0;

  &:focus {
    border: 1px solid #000;
    outline: none;
  }
`;

const LastName = styled.input`
  width: 24em;
  margin-bottom: 14px;
  padding: 8px;
  border: 1px solid #dad9d9;
  border-radius: 0;

  &:focus {
    border: 1px solid #000;
    outline: none;
  }
`;

const Email = styled.input`
  width: 24em;
  margin-bottom: 14px;
  padding: 8px;
  border: 1px solid #dad9d9;
  border-radius: 0;

  &:focus {
    border: 1px solid #000;
    outline: none;
  }
`;

const Password = styled.input`
  width: 24em;
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid #dad9d9;
  border-radius: 0;

  &:focus {
    border: 1px solid #000;
    outline: none;
  }
`;

const Button = styled.button`
  width: 24em;
  padding: 10px 0;
  border-radius: 0;
  border: none;
  background-color: #f3ac9e;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #facac0;
    transition-delay: 0.1s;
  }
`;

const CreateAccount = styled.p`
  margin-top: 18px;
  color: #a7a7a7;
`;

const Login = styled(Link)`
  text-decoration: none;

  &:hover {
    color: #373737;
    transition-delay: 0.1s;
  }

  &:visited {
    color: #a7a7a7;
  }

  &:visited:hover {
    color: #373737;
  }
`;
