import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

const StoryDateStyled = styled.time`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: bold;
`;

const StoryDate = ({ children }) => {
  return (
    <StoryDateStyled datetime={children}>
      {dayjs(children).format("LL")}
    </StoryDateStyled>
  );
};

export default StoryDate;
