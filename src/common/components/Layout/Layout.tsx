import React from "react";
import styled from "styled-components";

import Main from "../Main";
import Header from "../Header";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
    </Wrapper>
  );
};

export default Layout;
