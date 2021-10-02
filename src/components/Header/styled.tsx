import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;

  padding: 10px;
  margin-bottom: 15px;
`;

const Image = styled.Image`
  width: 40px;
  height: 40px;
`;

const Title = styled.Text`
  margin-left: 10px;
  color: #1592e6;
`;

export { Container, Title, Image };
