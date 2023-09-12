import React from "react";
import styled from "styled-components";

export const Layout = ({ children }) => (
  <Container>{children}</Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;