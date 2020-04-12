import React from "react";
import styled from "styled-components";

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

const Register = () => {
  return (
    <FormContainer>
      <h1>Register New User</h1>
      <Form>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input type="text" placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" placeholder="name@example.com" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input type="password" placeholder="*****" />
        </FormGroup>
        <FormGroup>
          <Input type="submit" value="Register" />
        </FormGroup>
      </Form>
    </FormContainer>
  );
};

export default Register;
