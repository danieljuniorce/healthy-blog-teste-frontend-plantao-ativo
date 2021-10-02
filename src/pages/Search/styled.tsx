import styled from 'styled-components/native';
import Input from '../../components/Input';

const Container = styled.View`
  padding-horizontal: 20px;
`;

const Title = styled.Text`
  font-size: 28px;
`;

const InputGroup = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InputSearch = styled(Input)`
  background: transparent;
`;

const ButtonSearch = styled.TouchableOpacity`
  position: relative;
  height: 45px;
  margin-left: -25px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextButtonSearch = styled.Text`
  font-size: 25px;
  color: #1592e6;
`;

const SubTitle = styled.Text`
  font-size: 19px;
  margin-bottom: 25px;
`;

const ResponseView = styled.View`
  margin-top: 25px;
  margin-bottom: 200px;
`;

const TitleResponse = styled.Text``;

export {
  Container,
  Title,
  SubTitle,
  InputGroup,
  InputSearch,
  ButtonSearch,
  ResponseView,
  TitleResponse,
  TextButtonSearch,
};
