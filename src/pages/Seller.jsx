import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: center;
  margin: 10% 35%;
`;

const Input = styled.input`
  margin: 25px;
  padding: 10px;
  font-weight: bold;
  width: 100%;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 10px;
  font-weight: 900;
  font-size: 25px;
  background-color: #0c0c0c;
  color: #dcca87;
  cursor: pointer;
`;
const Heading = styled.h3`
  font-weight: 900;
  font-size: 30px;
`;

const Seller = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>Dubois Beauty</Heading>

        <Input placeholder="Email" type="text" />
        <Input placeholder="password" type="password" />

        <Button>Login</Button>
      </Wrapper>
    </Container>
  );
};

export default Seller;
