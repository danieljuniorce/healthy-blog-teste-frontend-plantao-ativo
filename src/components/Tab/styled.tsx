import styled from 'styled-components/native';
import { Animated } from 'react-native';

interface KeyboardType {
  KeyboardShow: boolean;
}

export const Container = styled(Animated.View)<KeyboardType>`
  display: ${props => (props.KeyboardShow ? 'none' : 'flex')};

  height: 100px;
  margin-top: 12px;
  margin-bottom: 30px;

  position: absolute;
  bottom: -15px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background: #1592e6;
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
`;
export const TabText = styled.Text`
  font-size: 13px;
  color: #fff;
`;
