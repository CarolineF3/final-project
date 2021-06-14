import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SignUp = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper onSubmit={onFormSubmit}>
      <Header>CREATE ACCOUNT</Header>
      <Instructions>Fill in the information below:</Instructions>
      <FirstName
        type='text'
        aria-label='First name'
        placeholder='First name'
        onChange={(e) => setFirstName(e.target.value)}
      ></FirstName>
      <LastName
        type='text'
        aria-label='Last name'
        placeholder='First name'
        onChange={(e) => setLastName(e.target.value)}
      ></LastName>
      <Email
        type='email'
        aria-label='Email'
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
      ></Email>
      <Password
        type='password'
        aria-label='Password'
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
      ></Password>
      <Button type='submit' onClick={onFormSubmit}>
        Create account
      </Button>
      <CreateAccount>
        Already a member?{" "}
        <Link to='/login'>
          <Login>Login</Login>
        </Link>
      </CreateAccount>
    </Wrapper>
  );
};

export default SignUp;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 54vh;
  padding: 24px;
  background-color: #f7f5f0;
`;

const Header = styled.h2`
  font-size: 22px;
  font-weight: normal;
`;

const Instructions = styled.p`
  font-size: 12px;
  margin-bottom: 16px;
`;

const FirstName = styled.input`
  width: 24em;
  margin-bottom: 14px;
  padding: 8px;
  border: 1px solid #aaa9a9;
  border-radius: 0;
  font-size: 12px;

  &:focus {
    border: 1px solid #000;
    outline: none;
  }
`;

const LastName = styled.input`
  width: 24em;
  margin-bottom: 14px;
  padding: 8px;
  border: 1px solid #aaa9a9;
  border-radius: 0;
  font-size: 12px;

  &:focus {
    border: 1px solid #000;
    outline: none;
  }
`;

const Email = styled.input`
  width: 24em;
  margin-bottom: 14px;
  padding: 8px;
  border: 1px solid #aaa9a9;
  border-radius: 0;
  font-size: 12px;

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
  font-size: 12px;

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
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: #818a87;
    transition-delay: 0.1s;
  }
`;

const CreateAccount = styled.p`
  font-size: 12px;
  margin-top: 18px;
`;

const Login = styled(Link)`
  font-weight: bold;
  text-decoration: none;
`;
