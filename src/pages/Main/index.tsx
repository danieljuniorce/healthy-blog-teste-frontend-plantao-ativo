import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  background: #0a0b16;

  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextView = styled.Text`
  color: #fff;
  font-size: 25px;
`;

export default function Main() {
  return (
    <Container>
      <TextView>Hello World</TextView>
    </Container>
  );
}
