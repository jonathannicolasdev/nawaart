import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import login from "../redux/actions/login";

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

const Login = ({ isLoading, error, isAuthenticated, handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleLogin({ email, password });
  };

  return (
    <React.Fragment>
      {isAuthenticated ? (
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
              <Input
                type="submit"
                value={isLoading ? "Logging in..." : "Login"}
                disable={isLoading}
              />
            </FormGroup>
            {error && <p>{JSON.stringify(error)}</p>}
          </Form>
        </FormContainer>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  error: state.auth.error,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (user) => dispatch(login(user)),
  };
};

Login.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  handleLogin: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
