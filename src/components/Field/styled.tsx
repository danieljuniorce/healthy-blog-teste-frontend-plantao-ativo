import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  height: 90px;
  border-radius: 10px;
  margin-vertical: 6px;

  background: #1592e6;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Content = styled.View``;

const View = styled.TouchableOpacity``;

const TextView = styled.Text`
  color: #fff;
  font-weight: 700;

  font-size: 16px;
`;

const Title = styled.Text`
  font-size: 19px;
  font-weight: 700;
  color: #fff;
`;

const Body = styled.Text`
  color: #fff;
`;

export { Container, Content, View, TextView, Title, Body };
