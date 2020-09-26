import React from "react";
import styled from "styled-components";

import Page from "../components/Page";

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const NotFound = () => {
  return (
    <Page>
      <Center>
        <h1>Sorry, page not found.</h1>
      </Center>
    </Page>
  );
};

export default NotFound;
