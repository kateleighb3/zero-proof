import React from "react";
import styled from "styled-components";

// styling for the maps
export const Layout = ({ children }) => (
  <Container>{children}</Container>
);

// map styling
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;