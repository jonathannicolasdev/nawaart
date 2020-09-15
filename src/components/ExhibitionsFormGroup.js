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

const ExhibitionList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExhibitionItem = styled.div`
  display: flex;
  padding: 10px 0;
  input {
    flex: 1;
  }
`;

const Input = styled.input`
  font-size: 1.5rem;
  padding: 10px;
`;

const Button = styled.button`
  font-size: 1.5rem;
  background-color: #ffffff;
  border: 1px solid #333333;
  border-radius: 2px;
  padding: 10px 20px;
  margin-left: 10px;
`;

const ExhibitionsFormGroup = () => {
  const [exhibitions, setExhibitions] = useState([
    "2020 “Perupa Tua#1 Ring Road”, Sangkring Art Space, Yogyakarta",
    "2018 “Perupa Muda#3 Ring Road”, Sangkring Art Space, Yogyakarta",
  ]);

  const handleAdd = () => {
    const updatedExhibitions = exhibitions.concat(" ");
    setExhibitions(updatedExhibitions);
  };

  const handleRemove = (index) => {
    const updatedExhibitions = exhibitions.filter(
      (exhibition, exhibitionIndex) => index !== exhibitionIndex
    );

    setExhibitions(updatedExhibitions);
  };

  const handleEdit = () => {};

  return (
    <FormGroup>
      <SubLabel>Exhibitions</SubLabel>
      <ExhibitionList>
        {exhibitions.map((exhibition, index) => {
          return (
            <ExhibitionItem key={index}>
              <Input type="text" value={exhibition} onChange={handleEdit} />
              <Button onClick={() => handleRemove(index)}>{"-"}</Button>
              <Button onClick={handleAdd}>{"+"}</Button>
            </ExhibitionItem>
          );
        })}
      </ExhibitionList>
    </FormGroup>
  );
};

// ExhibitionsFormGroup.propTypes = {};

export default ExhibitionsFormGroup;
