import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper onSubmit={onFormSubmit}>
      <Header>SIGN IN</Header>
      <Instructions>Enter your email address and password:</Instructions>
      <Email
        type='email'
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
      ></Email>
      <Password
        type='password'
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
      ></Password>
      <Button type='submit' onClick={onFormSubmit}>
        SIGN IN
      </Button>
      <CreateAccount>
        Do not have an account?{" "}
        <Link to='/signup'>
          <Create>Create account</Create>
        </Link>
      </CreateAccount>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  width: 100%;
  height: 48vh;
  padding: 24px;
  background-color: #f7f5f0;
`;

const Header = styled.h2`
  font-weight: normal;
`;

const Instructions = styled.p`
  margin-bottom: 16px;
`;

const Email = styled.input`
  width: 24em;
  margin-bottom: 14px;
  padding: 8px;
  border: 1px solid #aaa9a9;
  border-radius: 0;

  &:focus {
    border: 1px solid #000;
    outline: none;
  }
`;

const Password = styled.input`
  width: 24em;
  margin-bottom: 14px;
  padding: 8px;
  border: 1px solid #aaa9a9;
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
  background-color: #6e7976;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #818a87;
    transition-delay: 0.1s;
  }
`;

const CreateAccount = styled.p`
  margin-top: 18px;
`;

const Create = styled(Link)`
  font-weight: bold;
  text-decoration: none;
`;
