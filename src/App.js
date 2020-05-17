import React from "react";
import "./styles.css";
import styled from "styled-components";
import Card from "./components/Card";

const Container = styled.div`
  /* font-family: sans-serif; */
  text-align: center;
  /* color: red; */
`;

const H1 = styled.h1`
  font-family: sans-serif;
  color: red;
`;
function App() {
  return (
    <Container>
      <H1>Nasa Photo of the Day</H1>
      <Card />
    </Container>
  );
}
export default App;
