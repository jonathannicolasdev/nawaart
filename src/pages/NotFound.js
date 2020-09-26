import React from "react";

import Page from "../components/Page";
import ErrorHeading from "../components/ErrorHeading";

const NotFound = () => {
  return (
    <Page>
      <ErrorHeading>Sorry, page not found.</ErrorHeading>
    </Page>
  );
};

export default NotFound;
