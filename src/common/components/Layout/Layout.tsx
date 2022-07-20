import React from "react";
import styled from "styled-components";

import Main from "../Main";

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Main>{children}</Main>
    </Wrapper>
  );
};

export default Layout;
