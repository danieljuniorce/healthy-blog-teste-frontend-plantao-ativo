import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  height: 90px;
  border-radius: 10px;
  margin-vertical: 6px;

  display: flex;

  background: #1592e6;
`;

const Content = styled.View`
  margin-horizontal: 10px;
  margin-vertical: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const View = styled.TouchableOpacity``;

const TextView = styled.Text`
  color: #fff;
  font-weight: 700;
`;

const Title = styled.Text`
  font-size: 19px;
  font-weight: 700;
  color: #fff;
`;

const Body = styled.Text`
  color: #fff;
  margin-horizontal: 10px;
`;

export { Container, Content, View, TextView, Title, Body };
