import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
`;

const SubLabel = styled.label`
  font-weight: 700;
  color: #888888;
`;

const Input = styled.input`
  font-size: 1.5rem;
  padding: 10px;
`;

const ExhibitionsFormGroup = (props) => {
  return (
    <FormGroup>
      <SubLabel>Exhibitions</SubLabel>
      <Input type="text" value="" />
    </FormGroup>
  );
};

ExhibitionsFormGroup.propTypes = {};

export default ExhibitionsFormGroup;
