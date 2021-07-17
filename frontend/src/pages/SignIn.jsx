import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch, batch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import user from "../reducers/user";

const SignIn = () => {
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

    const API_LOGIN = "https://stay-witchy.herokuapp.com/signin";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    fetch(API_LOGIN, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          batch(() => {
            dispatch(user.actions.setAccessToken(data.accessToken));
            dispatch(user.actions.setErrors(null));
            dispatch(user.actions.setId(data.userID));
          });
        } else {
          dispatch(user.actions.setErrors(data));
        }
      });

    setEmail("");
    setPassword("");
  };
  return (
    <Wrapper>
      <Form onSubmit={onFormSubmit}>
        <Header>SIGN IN</Header>
        <Instructions>Enter your email address and password:</Instructions>
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
        <Button type='submit' aria-label='Sign in'>
          SIGN IN
        </Button>
        <CreateAccount>
          Do not have an account? <SignUp to='/signup'>Create account</SignUp>
        </CreateAccount>
      </Form>
    </Wrapper>
  );
};

export default SignIn;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.857em 0.857em 5em 0.857em;
`;

const Header = styled.h2`
  margin-top: 1.429em;
  margin-bottom: 1.429em;
`;

const Instructions = styled.p`
  margin-bottom: 1.143em;
`;

const Email = styled.input`
  margin-bottom: 1em;
`;

const Password = styled.input`
  margin-bottom: 1.143em;
`;

const Button = styled.button`
  width: 24em;
  padding: 0.714em 0;
  color: var(--primary-btn-color);
  background-color: var(--primary-btn-background-color);

  &:hover {
    filter: brightness(110%);
    transition-delay: 0.1s;
  }
`;

const CreateAccount = styled.p`
  margin-top: 1.286em;
  color: var(--tertiary-font-color);
`;

const SignUp = styled(Link)`
  text-decoration: none;

  &:hover {
    color: var(--primary-font-color);
    transition-delay: 0.1s;
  }

  &:visited {
    color: var(--tertiary-font-color);
  }

  &:visited:hover {
    color: var(--primary-font-color);
  }
`;
