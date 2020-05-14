import React, { useState } from "react";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import { getToken } from "../utils/token";
import { setToken } from "../utils/token";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Form = styled.form`
  width: 500px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Label = styled.label`
  font-weight: 700;
`;

const Input = styled.input`
  font-size: 1.5rem;
  padding: 10px;
`;

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const url = process.env.REACT_APP_API_URL + `/users/login`;
      const response = await axios.post(url, {
        email,
        password,
      });
      setToken(response.data.token);
      history.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <React.Fragment>
      {getToken() ? (
        <Redirect to="/" />
      ) : (
        <FormContainer>
          <h1>Login</h1>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                placeholder="*****"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Input type="submit" value="Login" />
            </FormGroup>
          </Form>
        </FormContainer>
      )}
    </React.Fragment>
  );
};

export default withRouter(Login);
