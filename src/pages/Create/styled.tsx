import styled from 'styled-components/native';
import Input from '../../components/Input';

const Container = styled.View`
  padding-horizontal: 20px;
`;

const Title = styled.Text`
  font-size: 28px;
`;

const SubTitle = styled.Text`
  font-size: 19px;
  margin-bottom: 25px;
`;

const InputGroup = styled.View`
  margin-vertical: 10px;
`;

const InputTextArea = styled(Input)`
  height: 120px;

  display: flex;
  text-align-vertical: top;

  background: transparent;
`;

const TitleInput = styled.Text`
  font-size: 16px;
  font-weight: 700;

  margin-bottom: 7px;
`;

const QtdInput = styled.Text`
  width: 100%;
  margin-top: 5px;

  font-size: 12px;

  text-align: right;
`;

const ButtonView = styled.View`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;

  display: flex;
  align-items: flex-end;
`;

const TextButton = styled.Text`
  font-size: 16px;
  font-weight: 600;

  color: #fff;
`;

export {
  Container,
  Title,
  SubTitle,
  InputGroup,
  InputTextArea,
  TitleInput,
  QtdInput,
  ButtonView,
  TextButton,
};
